import React, {useState} from "react";
import './Calculator.css';

const scaleNames = {
    c: '섭씨', f: '화씨'
}

function TemperatureInput(props) {
    const [temperature, setTemperature] = useState('');

    const handleChange = (e) => {
        setTemperature(e.target.value);
    }

    return (
        <fieldset>
            <legend>온도를 입력하세요:(단위:{props.scale})</legend>
            <input value={temperature} onChange={handleChange}/>
        </fieldset>
    )
}

export default TemperatureInput;