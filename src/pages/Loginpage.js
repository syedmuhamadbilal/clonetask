import React from 'react'
import Textandtime from '../components/Textandtime'
import Card from '../components/Card'
import Metamaskbutton from '../components/Metamaskbutton'
import icon1 from "../images/meta-mask.png"
import "../css/Loginpage.css"
const Loginpage = () => {
    return (
        <div className="loginpage">
            <Textandtime />
            <Card />
            <Metamaskbutton img={icon1} color="#242735">Claim with Metamask</Metamaskbutton>
        </div>
    )
}

export default Loginpage
