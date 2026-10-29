
import React from "react";
import "./Mailbox.css";

function Mailbox() {
    const unreadMessages = 3;

    return (
        <div className="mailbox-container">
            <h1>안녕하세요!</h1>

            {unreadMessages > 0 &&
                <h2>
                    현재 {unreadMessages}개의 읽지 않은 메세지가 있습니다
                </h2>
            }
        </div>
    );
}

export default Mailbox;
