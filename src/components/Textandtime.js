import React from 'react'
import "../css/Textandtime.css"
import timer from "../images/timer.PNG"

const Textandtime = () => {
    return (
        <div className="textsection">
            <p className="textsectionpara">
                You are Claimer #28
                <br />
                Your claim is reserved for the next 3
                <br />
                Minutes
            </p>
            <img src={timer} alt="" className="timer" />
        </div>
    )
}

export default Textandtime
