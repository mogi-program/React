import React from "react";
import {render} from '@testing-library/react'

function AttendanceBook() {
    const students = [{name: "Inje", id: 1}, {name: "Steve", id: 2}, {name: "Bill", id: 3}, {name: "Jeff", id: 4},]

    return (
        <ul>
            {students.map((student) => {
                    return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    )
}

export default AttendanceBook;