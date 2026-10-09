class Solution(object):
    def frequencySort(self, s):
        """
        :type s: str
        :rtype: str
        """
        count = {}
        for char in s:
            count[char] = count.get(char, 0) + 1
        sorted_count = sorted(count.items(), key=lambda x: x[1], reverse=True)
        result = ""
        for char, freq in sorted_count:
            for i in range(freq):
                result += char
        return result

        