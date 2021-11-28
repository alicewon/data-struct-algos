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