class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        s = s.strip().lower()
        string = ""
        for i in range(len(s)):
            code = ord(s[i])
            if(code >= 97 and code <= 122) or (code >= 48 and code <= 57):
                string = string + s[i]

        reverse = ""
        for i in range(len(string)-1,-1,-1):
            reverse = reverse + string[i]
        return string == reverse
        