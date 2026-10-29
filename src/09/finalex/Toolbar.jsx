import React from "react";
import "./Toolbar.css";

function Toolbar(props) {
    const { isLoggedIn, loginClick, logoutClick } = props;

    return (
        <div className="toolbar">
            {isLoggedIn && (
                <span className="welcome-message">
                    환영합니다!
                </span>
            )}

            {isLoggedIn ? (
                <button
                    className="logout-button"
                    onClick={logoutClick}
                >
                    로그아웃
                </button>
            ) : (
                <button
                    className="login-button"
                    onClick={loginClick}
                >
                    로그인
                </button>
            )}
        </div>
    );
}

export default Toolbar;