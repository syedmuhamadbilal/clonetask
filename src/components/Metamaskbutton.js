import React from 'react'
import "../css/Metamaskbutton.css"

const Metamaskbutton = ({ img, children, color }) => {
    return (
        <div>
            <button className="mybutton" style={{ background: color }}>
                <img src={img} alt="" className="mybutton-icon" />
                {children}
            </button>
        </div>
    )
}

export default Metamaskbutton
