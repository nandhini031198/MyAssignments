function countOfNumInArray(nums, k) {
  let count = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === k) {
      count += 1;
    }
  }
  return count;
}
const numsValue = [2, 4, 3, 5, 2, 2, 1];
const kValue = 2;
console.log(`Count of k: ${countOfNumInArray(numsValue, kValue)}`);
