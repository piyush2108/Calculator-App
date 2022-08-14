import React, { useEffect, useState } from "react";
import HistoryData from "../historyData";
import Heading from "./Heading";
import Output from "./Output";
import ButtonGrid from "./ButtonGrid";
import History from "./history";
import "../css/app.css";

export const CalculatorContext = React.createContext()

function App(){
  const [currState, setCurrState] = useState("")
  const [prevState, setPrevState] = useState("")
  const [operator, setOperator] = useState("")

  useEffect(() => {
    setCurrState("O")
  }, [])

  const calculatorContextValue = {
    handleClick
  }

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
    <CalculatorContext.Provider value={calculatorContextValue}>
      <div className="calculator">
        <div className="calculator-grid">
          <div className="container">
            <Heading />

            <Output 
              currState={currState}
              prevState={prevState}
              operator={operator}
            />

            <ButtonGrid />
          </div>
        </div>

        <History />
      </div>
    </CalculatorContext.Provider>
  )
}

export default App