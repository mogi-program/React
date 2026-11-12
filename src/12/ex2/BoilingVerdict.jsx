import React from "react";

function BoilingVerdict(props) {
    if(props.celsius >= 100){
        return <p className="verdict-boil">🔥 물이 끓습니다!</p>
    }
    else {
        return <p className="verdict-not-boil">💧 물이 끓지 않습니다.</p>
    }
}

export default BoilingVerdict;