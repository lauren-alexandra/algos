"""
3Sum:

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that 
i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
"""

def threeSum(nums):
        set_of_nums = set()
        result_set = set()

        for i in range(len(nums) - 1):
            if i > 0:
                for j in range(i + 1, len(nums)):
                    element_to_find = -1 * (nums[i] + nums[j])

                    if element_to_find in set_of_nums:
                        result_set.add(tuple(sorted((nums[i], nums[j], element_to_find))))

            set_of_nums.add(nums[i])

        return list(result_set)
