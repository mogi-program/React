import React from 'react';
import Book from "./Book";
import "./Book.css"
function Library(){
    return(
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300} imgUrl={"https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791199489561.jpg?t=2980658"}/>
            <Book name="처음 만난 자바스크립트" numOfPage={400} imgUrl={"https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791139721973.jpg?t=2980658"}/>
            <Book name="처음 만난 Java" numOfPage={500} imgUrl={"https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788937460586.jpg?t=2980658"}/>
            <Book name="난생 처음 자바" numOfPage={250} imgUrl={"https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791198547514.jpg?t=2980658"}/>
            <Book name="처음 보는 React" numOfPage={100} imgUrl={"https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791170614043.jpg?t=2980658"}/>
        </div>
    );
}

export default Library;