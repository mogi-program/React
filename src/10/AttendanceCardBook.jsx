
import React from "react";
import "./AttendanceCardBook.css";

function AttendanceCardBook() {
    const students = [
        {
            name: "장원영",
            id: 1,
            major: "인공지능소프트웨어",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
            grade: 1
        },
        {
            name: "안유진",
            id: 2,
            major: "메카트로닉스",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            grade: 1
        },
        {
            name: "김리즈",
            id: 3,
            major: "시각디자인",
            avatar: "https://randomuser.me/api/portraits/women/3.jpg",
            grade: 1
        },
        {
            name: "메타버스콘텐츠",
            id: 4,
            major: "인공지능소프트웨어",
            avatar: "https://randomuser.me/api/portraits/women/4.jpg",
            grade: 1
        },
        {
            name: "김민지",
            id: 5,
            major: "컴퓨터공학",
            avatar: "https://randomuser.me/api/portraits/women/5.jpg",
            grade: 2
        },
        {
            name: "이서연",
            id: 6,
            major: "정보통신",
            avatar: "https://randomuser.me/api/portraits/women/6.jpg",
            grade: 2
        },
        {
            name: "박지민",
            id: 7,
            major: "인공지능소프트웨어",
            avatar: "https://randomuser.me/api/portraits/women/7.jpg",
            grade: 2
        },
        {
            name: "최수빈",
            id: 8,
            major: "메카트로닉스",
            avatar: "https://randomuser.me/api/portraits/women/8.jpg",
            grade: 3
        },
    ];

    return (
        <div className="attendance-container">
            <h2>학생 출석부</h2>
            <div className="student-list">
                {students.map((student) => (
                    <div className="student-card" key={student.id}>
                        <img src={student.avatar} alt={student.name}/>
                        <div className="student-info">
                            <h3>{student.name}</h3>
                            <p>{student.grade}학년 | {student.major}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AttendanceCardBook;
