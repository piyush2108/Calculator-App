import React, { useEffect, useState } from "react";
import HistoryData from "../historyData";
import Heading from "./Heading";
import History from "./history";
import "../css/app.css";


function App(){
  const [currState, setCurrState] = useState("")
  const [prevState, setPrevState] = useState("")
  const [operator, setOperator] = useState("")

  useEffect(() => {
    setCurrState("O")
  }, [])

  function handleClick({type, value}){

    switch(type){
      case 'addDigit':
        if(currState === "0" && value === '0') return
        if(currState.includes('.') && value === '.') return
        if(currState === "O") return setCurrState(value)

        return  setCurrState(currState+value)

      case 'deleteDigit':
        if(currState === "" || currState === "O") return
        if(currState.length === 1) return setCurrState("O")
        
        return setCurrState(currState.slice(0, -1))

      case 'Operator':
        setOperator(value)
        if(prevState === "" && currState === "O") return setPrevState("0")
        if(prevState === "" && currState !== "O"){
          setCurrState("O")
          return setPrevState(currState)
        }
        if(prevState === Number.POSITIVE_INFINITY){
          setPrevState("")
          setOperator("")
        }
        
        return setPrevState(evaluate(currState, prevState, value))

      case 'Evaluate':
        if(prevState === "" && currState === "O") return
        if(prevState === "" && currState !== "") return
        if(prevState !== "" && currState === "O"){
          setPrevState("")
          setOperator("")
          return setCurrState(prevState)
        }

        if(prevState !== "" && currState !== "O"){
          const newItem = prevState+operator+currState+"\n= "+evaluate(currState, prevState, operator)
          HistoryData.push(newItem)
        }

        setPrevState("")
        setOperator("")
        return setCurrState(evaluate(currState, prevState, operator))

      case 'Clear':
        setCurrState("O")
        setPrevState("")
        setOperator("")
        break

      default: return ""

    }
  }

  function evaluate(currState, prevState, value){ 
    const prev = parseFloat(prevState)
    const current = parseFloat(currState)
    if (isNaN(prev) || isNaN(current)) return ""
    let computation = ""
    switch (value) {
      case "+":
        computation = prev + current
        break
      case "-":
        computation = prev - current
        break
      case "x":
        computation = prev * current
        break
      case "÷":
        computation = prev / current
        break

      case "%":
        computation = prev / 100
        break

      default: return ""
    }
  
    return computation.toString()
  }
  
  return(
    <div className="calculator">
      <div className="calculator-grid">
        <div className="container">
          <Heading />

          <div className="output-display">
              <div className="previous-operand">{prevState}{operator}</div>
              <div className="current-operand">{currState}</div>
          </div>

          <div className="buttons-grid">
              <button 
              className="btn btn--danger"
              onClick={() => handleClick({type: "Clear", value: "C"})}>C</button>
              <button 
              className="btn btn--danger"
              onClick={() => handleClick({type: "deleteDigit", value: "←"})}>←</button>

              <button 
              className="btn btn--operator" 
              onClick={() => handleClick({type: "Operator", value: '%'})}>%</button>
              <button 
              className="btn btn--operator" 
              onClick={() => handleClick({type: "Operator", value: '÷'})}>÷</button>

              <button 
              className="btn btn--primary" 
              onClick={() => handleClick({type: "addDigit", value: '7'})}>7</button>
              <button 
              className="btn btn--primary" 
              onClick={() => handleClick({type: "addDigit", value: '8'})}>8</button>
              <button 
              className="btn btn--primary" 
              onClick={() => handleClick({type: "addDigit", value: '9'})}>9</button>

              <button 
              className="btn btn--operator" 
              onClick={() => handleClick({type: "Operator", value: 'x'})}>x</button>

              <button 
              className="btn btn--primary" 
              onClick={() => handleClick({type: "addDigit", value: '4'})}>4</button>
              <button 
              className="btn btn--primary" 
              onClick={() => handleClick({type: "addDigit", value: '5'})}>5</button>
              <button 
              className="btn btn--primary" 
              onClick={() => handleClick({type: "addDigit", value: '6'})}>6</button>

              <button 
              className="btn btn--operator" 
              onClick={() => handleClick({type: "Operator", value: '-'})}>-</button>

              <button 
              className="btn btn--primary" 
              onClick={() => handleClick({type: "addDigit", value: '1'})}>1</button>
              <button 
              className="btn btn--primary" 
              onClick={() => handleClick({type: "addDigit", value: '2'})}>2</button>
              <button 
              className="btn btn--primary" 
              onClick={() => handleClick({type: "addDigit", value: '3'})}>3</button>

              <button 
              className="btn btn--operator" 
              onClick={() => handleClick({type: "Operator", value: '+'})}>+</button>
              
              <button 
              className="btn btn--primary span-two" 
              onClick={() => handleClick({type: "addDigit", value: '0'})}>0</button>
              <button 
              className="btn btn--primary" 
              onClick={() => handleClick({type: "addDigit", value: '.'})}>.</button>
              
              <button 
              className="btn btn--equality" 
              onClick={() => handleClick({type: "Evaluate", value: "="})}>=</button>
          </div>
        </div>
      </div>
      <History />
    </div>
  )
}

export default App