import React, {useState} from "react";
import './Calculator.css';
import TemperatureInput from "./TemperatureInput";

function Calculator() {
    return (
        <div>
            <TemperatureInput scale = {"c"}/>
            <TemperatureInput scale = {"f"}/>
        </div>
    )
}

export default Calculator;