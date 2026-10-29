import React, { useState } from "react";
import LogOutButton from "./LogOutButton";
import LoginButton from "./LoginButton";
import Greeting from "../ex1/Greeting";
import "./LogInControl.css";

function LogInControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    let button;


    return (
        <div className="login-container">
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn
            ?<LogOutButton onClick={handleLogoutClick} />
            :<LoginButton onClick={handleLoginClick} />}
        </div>
    );
}

export default LogInControl;