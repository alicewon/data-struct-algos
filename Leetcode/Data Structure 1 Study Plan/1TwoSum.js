// https://leetcode.com/problems/two-sum/

// Problem:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//Solution:

var twoSum = function(nums, target) {
  const indices = [];

  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
      numsMap.set(nums[i], i);
  };

  for (let i = 0; i < nums.length; i++) {
      let numberToFind = (target - nums[i]);

      if (numsMap.has(numberToFind) && numsMap.get(numberToFind) !== i) {
          indices.push(i);
          indices.push(numsMap.get(numberToFind));
        return indices;
      }
  };
};