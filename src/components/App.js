import React from "react";
import "../css/app.css";

export default function App(){

  return(  
    <div className="calculator-grid">
      <div className="container">
        <div className="heading">
          <h1 id="heading">calc.</h1>
          <p id="sub-heading">using ReactJS</p>
        </div>

        <div className="output-display">
            <div className="previous-operand">12x4</div>
            <div className="current-operand">24</div>
        </div>

        <div className="buttons-grid">
            <button className="btn btn--danger">C</button>
            <button className="btn btn--danger">←</button>
            <button className="btn btn--operator">%</button>
            <button className="btn btn--operator">÷</button>

            <button className="btn btn--primary">7</button>
            <button className="btn btn--primary">8</button>
            <button className="btn btn--primary">9</button>
            <button className="btn btn--operator">x</button>

            <button className="btn btn--primary">4</button>
            <button className="btn btn--primary">5</button>
            <button className="btn btn--primary">6</button>
            <button className="btn btn--operator">-</button>

            <button className="btn btn--primary">1</button>
            <button className="btn btn--primary">2</button>
            <button className="btn btn--primary">3</button>
            <button className="btn btn--operator">+</button>
            
            <button className="btn btn--primary span-two">0</button>
            <button className="btn btn--primary">.</button>
            <button className="btn btn--equality">=</button>

        </div>
      </div>
    </div>
  )
}