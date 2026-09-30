class Solution(object):
    def repeatedSubstringPattern(self, s):
        """
        :type s: str
        :rtype: bool
        """
        n = len(s)
        for length in range(1, n//2+1):
            if n % length == 0:
                sub_str = ""
                for i in range(length):
                    sub_str += s[i]
                new_str = ""
                for i in range(n//length):
                    new_str += sub_str
                if new_str == s:
                    return True
        return False

