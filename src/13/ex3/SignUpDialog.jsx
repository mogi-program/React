import React from "react";
import Dialog from "../ex3/Dialog";
import './SignUpDialog.css';

function SignUpDialog(props) {
    const [nickname, setNickname] = React.useState("");

    const handleChange = (e) => {
        setNickname(e.target.value);
    }

    const handleSignUp = () => {
        alert(`어서 오세요, ${nickname}님!`);
    }

    return (
        <Dialog title={"화성 탐사 프로그램"} message={"닉네임을 입력해 주세요"}>
            <input
                className="SignUp-input"
                value={nickname}
                onChange={handleChange}
                placeholder={"닉네임을 입력하세요"}
            />
            <button
                className="SignUp-button"
                onClick={handleSignUp}
            >
                가입하기
            </button>
        </Dialog>
    )
}

export default SignUpDialog;