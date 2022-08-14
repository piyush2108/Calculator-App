import React, { useContext } from "react";
import { CalculatorContext } from "./App";

export default function ButtonGrid(){
    const {handleClick} = useContext(CalculatorContext)

    return(
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
    )
}