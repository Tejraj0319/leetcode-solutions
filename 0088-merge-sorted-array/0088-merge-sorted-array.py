class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: None Do not return anything, modify nums1 in-place instead.
        """
        if m == 0:
            for i in range(len(nums2)):
                nums1[i] = nums2[i]
        if n == 0:
          return nums2

        k = m
        for i in range(len(nums2)):
            nums1[k] = nums2[i]
            k = k + 1
        
        for i in range(len(nums1)):
            for j in range(len(nums1)-1):
                if nums1[j] > nums1[j + 1]:
                    temp = nums1[j]
                    nums1[j] = nums1[j+1]
                    nums1[j+1] = temp
        return nums1
        