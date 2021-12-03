// https://leetcode.com/problems/monotonic-array/

// Problem:
// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

var isMonotonic = function(nums) {
  let last = nums.length-1;

  for (let i=0; i < last; i++) {
      if (nums[0] <= nums[last]) {
          if (!(nums[i] <= nums[i+1])) {
              return false;
          }
      } else {
          if (!(nums[i] >= nums[i+1])) {
              return false;
          }
      }
  }
  return true;
};