// Assignment Details:
// Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement
// to assess score ranges.
// Assignment Requirements:
// 1. Create a function that takes a student's score as a parameter.
// 2. Declare and initialize the variable.
// 3. Use `switch` statement inside the function.
// 4. Return the corresponding grade.
// 5. Call the function and print the result.

//switch (true) evaluates each case until a condition evaluates to true.
function studentGrade(studentScore) {
  switch (true) {
    case studentScore >= 80:
      return "Grade A";
    case studentScore <= 79 && studentScore >= 50:
      return "Grade B";
    case studentScore <= 49:
      return "Grade C";
    default:
      return "No results";
  }
}

let score = 60;
console.log(studentGrade(score));
