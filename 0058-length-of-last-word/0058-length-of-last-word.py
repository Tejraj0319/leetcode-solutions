class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        string = s.strip()
        count = 0
        for i in range(len(string)-1, -1, -1):
            if string[i] == " ":
                break
            else:
                count += 1
        return count