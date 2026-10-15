class Solution(object):
    def findNumbers(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        count = 0
        for i in range(len(nums)):
            num_to_str = str(nums[i])
            num_length = len(num_to_str)
            if num_length % 2 == 0:
                count += 1
        return count
        