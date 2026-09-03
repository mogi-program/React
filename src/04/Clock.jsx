import React from "react";
import "./Clock.css"

function Clock(){
    return(
        <div className="clock-container">
            <h1 className="clock-name">인공지능소프트웨어과</h1>
            <h2 className="clock">현재 시각은{new Date().toLocaleTimeString()}입니다.</h2>
        </div>
    );
}

export default Clock;