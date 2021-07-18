import React, { useState } from 'react';
import {
    Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem,
    NavLink
} from 'reactstrap';
import "../css/LoginButton.css";
import Logo from "../images/logo.png";

const MyNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="faded bg-dark" dark expand="md">
                <NavbarBrand href="/" className="mr-auto"><img src={Logo} alt="" className="d-inline-block align-middle mr-2" width="60" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/" color="light" light><svg width="16" height="16" viewBox="0 0 16 16" style={{ fill: "#fff" }}>
                                <path d="M15 9a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5a1 1 0 011-1h5zm-9 3a1 1 0 011 1v2a1 1 0 01-1 1H1a1 1 0 01-1-1v-2a1 1 0 011-1h5zM6 0a1 1 0 011 1v8a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h5zm9 0a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1V1a1 1 0 011-1h5z" fill-rule="evenodd"></path>
                            </svg> Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap"><svg width="16" height="16" viewBox="0 0 16 16" style={{ fill: "#fff" }}>
                                <path d="M15.637 3.011L13.95.381A.836.836 0 0013.247 0H2.752a.836.836 0 00-.704.38L.362 3.012C-.508 4.37.264 6.26 1.89 6.475c.117.015.236.022.356.022.768 0 1.45-.33 1.917-.84.467.51 1.15.84 1.917.84.769 0 1.45-.33 1.917-.84.467.51 1.15.84 1.917.84.769 0 1.45-.33 1.917-.84a2.6 2.6 0 002.273.818c1.631-.214 2.406-2.103 1.533-3.464zm-1.884 4.301c-.26 0-.517-.038-.766-.096V9.75H3.012V7.216c-.25.056-.507.096-.766.096-.156 0-.315-.01-.468-.03a3.332 3.332 0 01-.426-.091v4.997c0 .449.371.812.831.812h11.638c.46 0 .831-.363.831-.813V7.191c-.14.04-.28.073-.426.091-.158.02-.314.03-.473.03z"></path>
                            </svg> Marketplace</NavLink>
                        </NavItem>
                    </Nav>
                    <a href="" className="flex px-20 items-center cursor-pointer bg-primary-4 hidden md:flex ms-auto">
                        <div className="mt-4 mr-8">
                            <svg width="16" height="16" viewBox="0 0 16 16" style={{ fill: "#fff" }}>
                                <path d="M13 12h-2.625a.376.376 0 01-.375-.375v-1.25c0-.206.169-.375.375-.375H13c.553 0 1-.447 1-1V3c0-.553-.447-1-1-1h-2.625A.376.376 0 0110 1.625V.375c0-.206.169-.375.375-.375H13a3 3 0 013 3v6a3 3 0 01-3 3zm-1.469-6.281L6.281.469C5.813 0 5 .329 5 1v3H.75a.748.748 0 00-.75.75v3c0 .416.334.75.75.75H5v3c0 .672.813 1 1.281.531l5.25-5.25a.756.756 0 000-1.062z"></path>
                            </svg>
                        </div>
                        Login
                    </a>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default MyNavbar
