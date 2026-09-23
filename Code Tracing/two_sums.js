function twoSum(nums, target) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen[complement] !== undefined) {
      return [seen[complement], i];
    }

    seen[nums[i]] = i;
  }

  return [];
}

console.log(twoSum([3, 2, 4], 6));