// https://leetcode.com/problems/binary-search/

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// SOLUTION:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  let left = 0;
  let right = nums.length-1

  while (left <= right) {
      let mid = Math.floor((left + right)/2);
      if (target === nums[mid]) return mid;
      else if (target < nums[mid]) right = mid-1;
      else left = mid+1;
  }
return -1;
};