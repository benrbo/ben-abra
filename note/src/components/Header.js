import React from "react";
import logo from "../image/logo.png";

function Header() {
    return (
        <header>
            <h1><img src={logo} width="25px" height="25px" alt="logo" className="logo"/> Note</h1>
        </header>
    )
}

export default Header;