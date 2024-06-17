function NumberButtons(props) {
    // Doc
    /*     props:
            --number: **each on of the buttons from buttons.json.number
                button
                display
                id
            --index **depending on the index, the button will change the first number or the second
            --(set)firstNumber **get or set first number if index is 0**
            --(set)secondNumber **get or set second number is index is 1**
            */

    function addNumber() {

        // Regex designed to test if the number is valid. f.e: no 2 dots are allowed.
        const regex = /^-?[0-9]*\.?([0-9]*)?$/
        const currentValue = props.index == 0 ? props.firstNumber : props.secondNumber
        const result = regex.test(`${currentValue}${props.number.button}`)
        // Check if the number is negative. Used only when the value is "0"
        const negative = currentValue[0] == "-" ? "-" : ""

        //Runs only in case regex test is true
        if (result) {
            if (props.index == "0") {
                // Case for first number
                (props.firstNumber == "0" || props.firstNumber == "-0") && props.number.button != "." ?
                    props.setFirstNumber(`${negative}${props.number.button}`) :
                    props.setFirstNumber(e => `${e}${props.number.button}`)
            } else {
                // Case for second number
                (props.secondNumber == "0" || props.secondNumber == "-0") && props.number.button != "." ?
                    props.setSecondNumber(`${negative}${props.number.button}`) :
                    props.setSecondNumber(e => `${e}${props.number.button}`)
            }
        }
    }
    //=================================================//

    return (
        <button id={props.number.id} onClick={addNumber}>{props.number.display}</button>
    )
}

export default NumberButtons