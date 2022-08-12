import React from "react";

export default function ButtonsGrid(){  

    return(
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
    )
}