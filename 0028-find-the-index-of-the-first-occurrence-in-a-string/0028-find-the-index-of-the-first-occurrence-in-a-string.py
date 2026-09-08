class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        if len(needle) == 0:
            return 0
        
        i = 0
        j = 0
        while i < len(haystack):
            if haystack[i] == needle[j]:
                i = i + 1
                j = j + 1
                if j == len(needle):
                    return i - j
            else:
                i = i - j + 1
                j = 0
        return -1
            
        