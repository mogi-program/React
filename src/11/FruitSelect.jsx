import React, {useState} from "react";
import "./FruitSelect.css";

function FruitSelect() {
    const [value, setValue] = useState("apple");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('선택한 과일: ' + value);
    }

    return (
        <form onSubmit={handleSubmit} className="fruit-container">
            <h2>🍓 과일 선택</h2>

            <label>
                과일을 선택하세요:
                <select value={value} onChange={handleChange}>
                    <option value={"apple"}>사과</option>
                    <option value={"banana"}>바나나</option>
                    <option value={"grapes"}>포도</option>
                    <option value={"melon"}>멜론</option>
                </select>
            </label>

            <button type="submit">선택 완료</button>
        </form>
    )
}

export default FruitSelect;