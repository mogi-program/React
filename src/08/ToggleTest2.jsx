import {useState, useEffect} from 'react'

function ToggleTest2(props){
    const [isToggleOn, setIsToggleOn] = useState(true)

    const toggleOn = () => {setIsToggleOn((isToggleOn) => !isToggleOn)}

    function toggleOn2(){
        setIsToggleOn((isToggleOn) => !isToggleOn)
    }

    return (
        <button onClick={toggleOn} className="toggle">
            {isToggleOn? 'Toggle On' : 'Toggle Off'}
        </button>
    )
}

export default ToggleTest2;