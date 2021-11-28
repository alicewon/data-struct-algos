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