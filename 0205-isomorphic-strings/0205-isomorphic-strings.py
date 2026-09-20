class Solution(object):
    def isIsomorphic(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if len(s) != len(t):
            return False
        map1 = {}
        map2 = {}
        for i in range(len(s)):
            sChar = s[i]
            tChar = t[i]
            if sChar in map1 and map1[sChar] != tChar:
                return False 
            if tChar in map2 and map2[tChar] != sChar:
                return False
            map1[sChar] = tChar
            map2[tChar] = sChar
        return True



        