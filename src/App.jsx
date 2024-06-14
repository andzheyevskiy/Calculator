import { useState } from 'react'
import buttonsJson from "./assets/buttons.json"
import NumberButtons from "./assets/components/NumberButtons"

function App() {
  const buttons = buttonsJson

  // App logic: each of the number for the operation will be saved in a state. The index is going to dictate on which of the state we operate:
  // index 0: firstNumber    index 1: Second number
  // index is going to be 0 only on a clean operation; in chained operations we will always be index 1, since index 0 is going to be the result
  // when we do an operation, it takes in consideration operator(firstNumber,secondNumber), changes the value of the first number to the result
  // and resets the second number and the operator
  const [numberIndex, setNumberIndex] = useState("0")
  const [firstNumber, setFirstNumber] = useState("0")
  const [secondNumber, setSecondNumber] = useState("")
  const [operator, setOperator] = useState("")
  let operatorSymbol;
  operatorSymbol = operator? buttons.operators.find(e=> e.id==operator).display : ""

  return (
    <>
      <div className='calculator-wrapper'>
        <div className='display-wrapper'>
          <input id='display' type="text" value={`${firstNumber}${operatorSymbol}${secondNumber}`} disabled />
        </div>
        <div className='button-wrapper'>
          <section className='number-wrapper'>
            {buttons.numbers.map(e =>
              <NumberButtons
                key={e.button}
                number={e}
                index={numberIndex}
                firstNumber={firstNumber} setFirstNumber={setFirstNumber}
                secondNumber={secondNumber} setSecondNumber={setSecondNumber}
              />)}
          </section>
        </div>

      </div>
    </>
  )
}





export default App
