import React, { useState } from "react";
import './DistanceCalculator.css';
import DistanceInput from "./DistanceInput";

// 1. 변환 계산 함수 정의
function toKm(mi) {
    return mi * 1.609344;
}

function toMi(km) {
    return km * 0.621371;
}

// 2. 변환 실행 및 소수점 정리 함수
function tryConvert(distance, convert) {
    const input = parseFloat(distance);
    if (Number.isNaN(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000; // 곱하기(*) 기호 추가
    return rounded.toString();
}

function DistanceCalculator(props) {
    const [distance, setDistance] = useState('');
    const [scale, setScale] = useState("km");

    const handleKmChange = (distance) => {
        setDistance(distance);
        setScale("km");
    };

    const handleMiChange = (distance) => {
        setDistance(distance);
        setScale("mi");
    };

    // 3. scale 상태에 맞춰 적절한 변환 함수(toCelsius / toFahrenheit)를 tryConvert에 전달
    const km = scale === "mi" ? tryConvert(distance, toKm) : distance;
    const mi = scale === "km" ? tryConvert(distance, toMi) : distance;

    return (
        <div className="calculator-container">
            <DistanceInput
                scale={"km"}
                distance={km}
                onDistanceChange={handleKmChange}
            />
            <DistanceInput
                scale={"mi"}
                distance={mi}
                onDistanceChange={handleMiChange}
            />
        </div>
    );
}

export default DistanceCalculator;