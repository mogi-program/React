import React from 'react';

const unitNames = {
    km: '킬로미터 (km)',
    mi: '마일 (mi)'
};

function DistanceInput({ scale, distance, onDistanceChange }) {
    const handleChange = (e) => {
        onDistanceChange(e.target.value);
    };

    return (
        <div className="input-group">
            <label>{unitNames[scale]} 입력</label>
            <input
                type="number"
                value={distance}
                onChange={handleChange}
                placeholder={`${unitNames[scale]}를 입력하세요`}
            />
        </div>
    );
}

export default DistanceInput;