// https://leetcode.com/problems/maximum-subarray/

// Problem:
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

var maxSubArray = function(nums) {
  let maxSum = nums[0];
  let current = maxSum;

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i] + current) {
          current = nums[i];
      } else {
          current += nums[i];
      }
      maxSum = Math.max(maxSum, current);
  }

  return maxSum;

};