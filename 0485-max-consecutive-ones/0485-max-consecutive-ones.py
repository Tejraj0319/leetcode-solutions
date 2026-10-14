class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        final_count = 0
        count = 0
        for i in range(len(nums)):
            if nums[i] == 1:
                count += 1
            if nums[i] == 0:
                if count > final_count:
                    final_count = count
                count = 0
        return count if count > final_count else final_count