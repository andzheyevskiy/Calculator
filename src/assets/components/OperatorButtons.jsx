import { useEffect } from "react"

function OperatorButtons(props) {
    // Doc
    /*         props:
                --number: ** each of the buttons from buttons.json.operators**
                    button 
                    display
                    id
                --(set)firstNumber **get the first number, or sets it as the result of the operation
                --(set)secondNumber **get the second number, and set it to "" when operation is done
                --(set)operator ** get operator to do an operation, or sets it in case there is none
                --setIndex ** set the index when the operation is clean.
                */
    function preOperate() {
        // Function to decide if we change the symbol of the number(positive/negative)
        // or we make the operation

        // make sure the symbol can only be changed when the second number is empty or has a negative symbol
        const changable = props.secondNumber == "" || props.secondNumber == "-"
        // make sure only the + and - buttons work to assing positive or negative numbers
        const negativeBtn = props.number.button == "+" || props.number.button == "-"
        if (props.operator && changable && negativeBtn) {
            setSymbol()
        } else if (props.number.id == "equals" && props.secondNumber == "") {
            equalsOnIndexOne()
        } else {
            operate()
        }
    }


    function setSymbol() {
        // Set symbol to positive or negative
        if (props.number.button == "-") {
            props.setSecondNumber(props.number.button)
        }
        else {
            // No plus symbol is going to be displayed in case of positive numbers
            props.setSecondNumber("")
            // Sets operator to plus in case of replaced numbers
            props.setOperator("add")
        }
    }
    function equalsOnIndexOne() {
        props.setFirstNumber(props.firstNumber ? props.firstNumber : "0")
    }

    function operate() {
        // if there is no second number, set index to 1
        if (!props.secondNumber && props.number.id != "equals") {
            props.setIndex("1")
        }
        // if there is a second number, make the operation depending on operator
        else {
            let finalNumber
            switch (props.operator) {
                case "add":
                    finalNumber = Number(props.firstNumber) + Number(props.secondNumber)
                    break
                case "subtract":
                    finalNumber = props.firstNumber - props.secondNumber
                    break
                case "multiply":
                    finalNumber = props.firstNumber * props.secondNumber
                    break
                case "divide":
                    finalNumber = props.firstNumber / props.secondNumber
                    break
            }
            // Set results to the first number and clean the second number
            props.setFirstNumber(finalNumber)
            props.setSecondNumber("")
            props.setOperator("")
            props.setIndex("0")
        }
        // Set operator. Equals is ignored since it is not an operator
        if (props.number.id != "equals") {
            props.setOperator(props.number.id)
            props.setIndex("1")
        }
    }

    function preOperateEventListener(event) {
        if(event.key === props.number.button){preOperate()}        
    }
    //===========================================//
    useEffect(()=>{
        document.addEventListener("keydown", preOperateEventListener)
        return () => document.removeEventListener("keydown",preOperateEventListener)
    })
    //===========================================//
    return (
        <button id={props.number.id} onClick={preOperate}>{props.number.display}</button>
    )
}

export default OperatorButtons