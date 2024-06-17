function ClearButton(props) {
    // Doc
    /*     props:
            --number: **each on of the button data from buttons.json.clear
                button
                display
                id
            --setIndex ** requiered to Reset index**
            --setFirstNumber ** requiered to Reset firstNumber**
            --setSecondNumber ** requiered to Reset secondNumber**
            --SetOperator ** requiered to Reset operator**
            */
    function clear() {
        props.setIndex("0")
        props.setFirstNumber("0")
        props.setSecondNumber("")
        props.setOperator("")
    }

    //==============================/
    return (
        <button id={props.number.id} onClick={clear}>{props.number.display}</button>
    )

}

export default ClearButton