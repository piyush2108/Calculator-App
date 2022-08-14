import React from "react";

export default function Output(props){        
    const {currState, prevState, operator} = props

    return(
        <div className="output-display">
            <div className="previous-operand">{prevState}{operator}</div>
            <div className="current-operand">{currState}</div>
        </div>
    )
}