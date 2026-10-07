class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        data = {}
        for string in strs:
            key = "".join(sorted(string))
            if key not in data:
                data[key] = []
            data[key].append(string)
        return list(data.values())