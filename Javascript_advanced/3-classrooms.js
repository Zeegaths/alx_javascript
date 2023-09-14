#!/usr/bin/node

// Closure and loops - This function creates a classroom with 10 students
function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        return function () {
            return seat;
        };
    }

    let students = [];

    for (let i = 0; i < numberOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }

    return students;
}

function classroom() {
    const students = createClassRoom(10);
    console.log(students);
}

classroom();
