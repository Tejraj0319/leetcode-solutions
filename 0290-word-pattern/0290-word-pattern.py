class Solution(object):
    def wordPattern(self, pattern, s):
        """
        :type pattern: str
        :type s: str
        :rtype: bool
        """
        words = s.split(" ")
        map1 = {}
        map2 = {}
        if len(words) == 0 or len(pattern) == 0 or len(words) != len(pattern):
            return False
        for i in range(len(words)):
            ch = pattern[i]
            word = words[i]
            if ch in map1 and map1[ch] != word:
                return False
            if word in map2 and map2[word] != ch:
                return False
            map1[ch] = word
            map2[word] = ch
        return True