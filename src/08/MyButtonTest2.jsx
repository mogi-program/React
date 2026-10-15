import {useState, useEffect} from 'react'

function MyButtonTest2() {

    const btnClick = (id, event) => {
        console.log(id, event.target, event.x, event.y)
    }

    return(
        <button onClick={(event) => btnClick(1, event)}>
            버튼을 클릭하세요
        </button>
    )
}

export default MyButtonTest2;