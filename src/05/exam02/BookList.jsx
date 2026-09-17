import React from "react";
import Book from "./Book";
import "./BookList.css";

const books= [
    {
        title: "처음 만난 리액트",
        author: "이인제",
        coverImage: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791175790063.jpg"
    },
    {
        title: "데이터베이스 실습",
        author: "김소룡",
        coverImage: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791156640127.jpg"},
    {
        title: "난생처음자바",
        author: "우재남",
        coverImage: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791156646624.jpg"
    }
]


function BookList() {
    return(
        <div className={"bookListWrapper"}>
            {books.map(book => {
                return (
                    <Book title={book.title}
                          author={book.author}
                          coverImage={book.coverImage}
                    />
                )
            })}
        </div>
    )
}

export default BookList;