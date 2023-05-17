// 2. Create an array of objects called `students`. Each object should have keys called `name`, `age`, `grades`, and `hobbies`. Then, create the following functions:

//    a. `findTopStudents` - Returns an array of students who have an average grade above a specified threshold.

//    b. `addHobby` - Adds a hobby to a student with a given name, only if the student exists.

//    c. `updateStudent` - Updates a student's information only if the student exists. This function should be able to update the student's name, age, grades, and hobbies.

const students = [
  {
    name: "Divya",
    age: 25,
    grades: [88, 85, 90],
    hobbies: ["singing", "dancing"],
  },

  {
    name: "Ashutosh",
    age: 24,
    grades: [70, 55, 90],
    hobbies: ["reading", "traveling"],
  },
];

let passingmarks = 85;
let topStudents = students.filter((student) => {
  const gradesTotal = student.grades.reduce((acc, grade) => acc + grade, 0);
  const avgGrade = gradesTotal / student.grades.length;
  return avgGrade > passingmarks;
});

console.log(topStudents);

// function findTopStudents(students, passingmarks) {
//   const topStudents = [];

//   students.forEach((student) => {
//     const gradesTotal = student.grades.reduce((acc, grade) => acc + grade, 0);
//     const avgGrade = gradesTotal / student.grades.length;

//     if (avgGrade > passingmarks) {
//       topStudents.push(student);
//     }
//   });
//   return topStudents;
// }

// let topstudents = [1, 2, 3,4,5,6,7,8,9];
// let sum = topstudents.reduce((total, value) => total + value, 1)
// console.log(sum)

// console.log(findTopStudents(students, 85));

// function addHobby(student, hobby) {
//   let studentCheck = students.findIndex(
//     (students) => students.name === student
//   );
//   if (studentCheck !== -1) {
//     students[studentCheck].hobbies.push(hobby);
//   }
// }
// addHobby("Divya", "painting");
// //console.log(students);

// function updateStudent(students, name, updatedData) {
//   return students.map((student) =>
//     student.name === name ? { ...student, ...updatedData } : student
//   );
// }
// console.log(
//   updateStudent(students, "Divya", {
//     age: 20,
//     grades: [90, 80, 95],
//     hobbies: ["reading", "painting"],
//   })
// );

// console.log(students);
