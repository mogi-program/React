import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const loginClick = () => {
        setIsLoggedIn(true);
    }
    const logoutClick = () => {
        setIsLoggedIn(false);
    }
    return (
        <Toolbar isLoggedIn = {isLoggedIn} loginClick = {loginClick} logoutClick = {logoutClick} />
    )
}

export default LandingPage;