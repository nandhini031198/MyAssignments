//Named function
function userProfile(n) {
  console.log(`Hello ${n}`);
}
let username = "Nandhini";
userProfile(username);

//Arrow function
const double = (num) => {
  return num * num;
};
console.log(double(2));

//Anonymous function
const displayMess = function () {
  setTimeout(() => {
    console.log("This message is delayed by 2 seconds");
  }, 2000);
};
displayMess();

//callback function
const getUserData = (callbackFunc) => {
  setTimeout(() => {
    callbackFunc();
  }, 3000);
  console.log("Before setimeout");
};

const callbackF = () => {
  console.log("Call back Function");
};

getUserData(callbackF);
