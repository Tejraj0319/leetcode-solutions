class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        max_length = 0
        char_list = []
        start = 0
        for i in range(len(s)):
            for j in range(start, i):
                if char_list[j] == s[i]:
                    start = j + 1
                    break
            char_list.append(s[i])
            current_length = i - start + 1
            if current_length > max_length:
                max_length = current_length
        return max_length