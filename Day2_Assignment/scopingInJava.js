//var genderType = "Female";
var genderType = "Male";

function printGender() {
  let color = "brown";

  if (genderType == "Female") {
    var age = 30;
    let color = "pink";
    console.log(color);
  } else {
    var age = 35;
    console.log(color);
  }

  console.log(age);
}

printGender();
console.log(genderType);
