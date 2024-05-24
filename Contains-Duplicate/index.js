/**
 * @param {number[]} nums
 * @return {boolean}
 */

// every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
const h1 = document.getElementById("result");
const containsDuplicate = (nums) => {
  nums = nums.sort();
  for (let i = 0; i < nums.length; i++) {
    console.log(nums);
    if (nums[i] === nums[i + 1]) {
      h1.innerHTML = nums[i] + " " + nums[i + 1];
      return console.log(true);
    }
  }
  h1.innerHTML = " " + "  No Duplicate";
  return console.log(false);
};

containsDuplicate([1, 2, 3, 4, 6, 7]);

// const containsDuplicate = (nums) => {
//   nums = nums.sort();
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       return console.log(true);
//     }
//   }
//   return console.log(false);
// };

// containsDuplicate([1, 2, 3, 4, 6, 7, 2]);
