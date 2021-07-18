import React from 'react'
import Textandtime from '../components/Textandtime'
import Card from '../components/Card'
import Metamaskbutton from '../components/Metamaskbutton'
import icon1 from "../images/meta-mask.png"
import "../css/Loginpage.css"
import { Link } from 'react-router-dom'
const Loginpage = () => {
    return (
        <div className="loginpage">
            <Textandtime />
            <Card />
            <Link to="/import">
                <Metamaskbutton img={icon1} color="#242735">Claim with Metamask</Metamaskbutton>
            </Link>
        </div>
    )
}

export default Loginpage
