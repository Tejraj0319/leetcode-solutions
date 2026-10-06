class Solution(object):
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """
        data = {}
        for i in s:
            data[i] = data.get(i, 0) + 1
        for i in range(len(s)):
            if data[s[i]] == 1:
                return i
        return -1     