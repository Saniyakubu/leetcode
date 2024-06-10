/**
 * Finds two numbers in an array that add up to a target number.
 * @param {number[]} nums - An array of numbers.
 * @param {number} target - The target number.
 * @returns {number[]} - An array containing the indices of the two elements that add up to the target number.
 */

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
