import React from 'react';
import Book from "./Book";
import "./Book.css"
function Library(){
    return(
        <div>
            <Book name="처음 만난 Java" numOfPage={300}/>
            <Book name="난생 처음 자바" numOfPage={250}/>
            <Book name="처음 보는 React" numOfPage={500}/>
        </div>
    );
}

export default Library;