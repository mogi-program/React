import {useState, useEffect} from 'react'

function ListenerTest() {
    const [text, setText] = useState('')

    const settingText = (event) => {
        setText(event.target.value)
    }
    const buttonClick = () => {
        alert(text)
        setText('')
    }

    return(
        <form>
            <input type={text} onChange={settingText}></input>
            <button onClick={buttonClick}>출력</button>
        </form>
    )
}
export default ListenerTest;