import React, { useState } from "react";
import HistoryData from "../historyData"
import HistoryItem from "./historyItem"
import icon from "../images/history.png"

export default function History(){
    const [isActive, setIsActive] = useState(false)

    const handleClick=() => {
        setIsActive(!isActive)
    }

    return(
        <div
        style={{
            top: isActive === false ? "-34%" : "50%",
        }}
        onClick={() => handleClick()}
        className="history-column">
            <div className="history-heading">
                <img id="icon" src={icon} alt="icon" />
                <h1 id="history-title">History</h1>
            </div>
            <div className="history-data">
                {
                    HistoryData.map(data => {
                    return <HistoryItem historyItem={data}/>
                    })
                }
            </div>
        </div>
    )
}