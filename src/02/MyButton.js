function MyButton(){
    // 전역변수로 이미 존재하는 React 객체
    const [isClicked, setIsClicked] = React.useState(false);
    // button 요소를 반환하는데 버튼이 클릭되었을 때 isClicked 상태의 값을 변경한다
    return React.createElement(
        'button',
        {
            onClick: () => setIsClicked(!isClicked),
        },
        isClicked ? 'Clicked' : 'Click here'
    )
}

const domContainer = document.getElementById('root');

//ReactBOM 객체에 루트 요소 객체를 생성
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MyButton))