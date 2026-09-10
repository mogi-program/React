import React from "react";
import Welcome from './Welcome'

function WelcomeList(){
    return(
        <div>
            <Welcome name = {`1번`} />
            <Welcome name = {`2번`} />
            <Welcome name = {`3번`} />
        </div>
    )
}

export default WelcomeList;