class Solution(object):
    def reverseVowels(self, s):
        """
        :type s: str
        :rtype: str
        """
        vowels = ""
        for i in range(len(s)):
            if s[i] in "aeiouAEIOU":
                vowels += s[i]
        j = len(vowels)-1
        newStr = ""
        for i in range(len(s)):
            if s[i] in "aeiouAEIOU":
                newStr += vowels[j]
                j -= 1
            else:
                newStr += s[i]
        return newStr
        