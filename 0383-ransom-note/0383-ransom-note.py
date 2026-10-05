class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        if len(ransomNote) > len(magazine):
            return False
        obj = {}
        for i in ransomNote:
            obj[i] = obj.get(i, 0) + 1
        for i in magazine:
            if obj.get(i, 0):
                obj[i] -= 1
        for key in obj:
            if obj[key] != 0:
                return False
        return True
        