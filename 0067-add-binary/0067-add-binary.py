class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        i = len(a) - 1
        j = len(b) - 1
        carry = 0
        result = ""
        while i >= 0 or j >= 0 or carry > 0:
            total = carry
            if i >= 0:
                total = total + int(a[i])
                i -= 1
            if j >= 0:
                total = total + int(b[j])
                j -= 1
            if total == 0:
                result = "0" + result
                carry = 0
            elif total == 1:
                result = "1" + result
                carry = 0
            elif total == 2:
                result = "0" + result
                carry = 1
            elif total == 3:
                result = "1" + result
                carry = 1
        return result