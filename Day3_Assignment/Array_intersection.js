// Assignment Details: Create a JavaScript program that defines a function to compute the intersection of two arrays. 
// The intersection should include elements that appear in both arrays without any duplicates. 

const arrintersection = (arr2, arr3) => {
  let arrinter = [];
  for (let i = 0; i <= arr2.length - 1; i++) {
    const element = arr2[i];
    if (!arr3.includes(element)) {
      arrinter.push(element);
    } else if (!arrinter.includes(element)) {
      arrinter.push(element);
    }
  }

  for (let j = 0; j <= arr3.length - 1; j++) {
    const element = arr3[j];
    if (!arrinter.includes(element)) {
      arrinter.push(element);
    }
  }
  return arrinter;
};
let arr = [1, 2, 3, 4, 5, 7];
let arr1 = [2, 4, 6, 5, 8];
console.log(arrintersection(arr, arr1));
