class Solution(object):
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        sum = 0
        for i in range(len(nums)):
            sum += nums[i]
        sumOfFirstNumbers = n*(n+1)/2
        return sumOfFirstNumbers - sum