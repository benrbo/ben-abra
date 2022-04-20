import React from "react";
import logo from "../asset/image/logo.png";
import '../Components/Header.css';

function Header() {
    return (
        <header>
            <span class="To-Do-Text"><img src={logo} alt="Logo" className="Logo"/> To Do List </span>
        </header>
    )
}

export default Header;