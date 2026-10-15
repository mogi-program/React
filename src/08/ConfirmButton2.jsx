import {useState, useEffect} from 'react'

function ConfirmButton2(props) {
    const [button, setButton] = useState(true)

    const handleClick = () => {
        setButton(!button)
    }
    return (
        <button onClick={handleClick} className="toggle" disabled={!button}>
            클릭하세요
        </button>
    )
}

export default ConfirmButton2;