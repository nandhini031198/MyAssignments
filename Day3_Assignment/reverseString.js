//Rvere the string  and find its a palindrome or not
//let name = "madam"

function reverseString(str) {
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
  }
  console.log(reverseStr);
  
  if (reverseStr === str) {
    console.log("Its Palindrome");
  } else {
    console.log("Its not a Palindrome");
  }
}
let str1 = "madam";
reverseString(str1);
