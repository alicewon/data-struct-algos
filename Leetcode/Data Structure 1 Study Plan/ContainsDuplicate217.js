// https://leetcode.com/problems/contains-duplicate/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// SOLUTION 1: using Map();
// Runtime: 84 ms, faster than 76.55% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 45.6 MB, less than 41.19% of JavaScript online submissions for Contains Duplicate.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  let numMap = new Map();
  for (let i=0; i<nums.length; i++) {
      if (numMap.has(nums[i])) return true;
      else numMap.set(nums[i], 1);
  }
  return false;

};


// SOLUTION 2: using object
  // Runtime: 88 ms, faster than 64.85% of JavaScript online submissions for Contains Duplicate.
  // Memory Usage: 47.2 MB, less than 12.37% of JavaScript online submissions for Contains Duplicate.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate2 = function(nums) {
    let numObj = {};

    for (let i=0; i<nums.length; i++) {
        if (numObj.hasOwnProperty(nums[i])) return true;
        else (numObj[nums[i]] = 1);
    }
    return false;
}

// TODO:
    //  Try with Set https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    //  Try bloonfilters https://llimllib.github.io/bloomfilter-tutorial/