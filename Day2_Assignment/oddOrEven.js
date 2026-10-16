/* 
Assignment Details:
Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the
number is odd and `"Even"` if the number is even.
Assignment Requirements:
1. Create a function named `isOddOrEven` that takes a number as a parameter
2. Declare and initialize the variable
3. Use a conditional statement to check if the number is divisible by 2
4. Call the function and print the result
*/

function isOddOrEven(n) {
  if (n % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
let num = 10;
console.log(isOddOrEven(num));
