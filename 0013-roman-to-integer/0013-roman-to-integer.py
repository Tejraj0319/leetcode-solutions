class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        map = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        sum = 0
        i = 0
        while i < len(s):
            first = map[s[i]]
            if i+1 < len(s):
                second = map[s[i+1]]
                if first < second:
                    sum = sum + (second - first)
                    i += 1
                else:
                    sum = sum + map[s[i]]
            else:
                sum = sum + map[s[i]]
            i += 1
        return sum
