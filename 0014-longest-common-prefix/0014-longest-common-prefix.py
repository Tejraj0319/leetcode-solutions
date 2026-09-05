class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        strs.sort()
        str1 = strs[0]
        str2 = strs[len(strs) - 1]
        perfix = ""
        for i in range(min(len(str1), len(str2))):
            if str1[i] == str2[i]:
                perfix += str1[i]
            else:
                break
        return perfix
        