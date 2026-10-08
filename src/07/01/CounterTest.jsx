import React, {useState, useEffect, useRef} from "react";

function CounterTest() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `총 ${counter} 번 클릭했습니다`;
    })

    return (
        <div>
            <p>총 {counter}번 클릭했습니다</p>
            <button onClick={() => {setCounter(counter + 1)}}></button>
        </div>
    )
}

export default CounterTest;