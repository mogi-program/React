import React, {useState} from "react";
import "./Reservation.css";

function Reservation(props) {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`아침 식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}명`);
    }

    return (
        <form className="reservation-container" onSubmit={handleSubmit}>
            <h2>🏨 예약 정보</h2>

            <label className="reservation-label">
                아침식사 여부:
                <input
                    type="checkbox"
                    checked={haveBreakfast}
                    onChange={(e) => {
                        setHaveBreakfast(e.target.checked);
                    }}
                />
            </label>

            <label className="reservation-label">
                방문자 수:
                <input
                    type="number"
                    value={numberOfGuest}
                    min="1"
                    onChange={(e) => {
                        setNumberOfGuest(e.target.value);
                    }}
                />
            </label>

            <button type="submit">예약 제출</button>
        </form>
    )
}

export default Reservation;