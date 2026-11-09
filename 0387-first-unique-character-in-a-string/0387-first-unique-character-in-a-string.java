class Solution {
    public int firstUniqChar(String s) {
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            for (int j = 0; j < s.length(); j++) {
                if (s.charAt(j) == ch) {
                    count++;
                }
                if (count > 1) {
                    count = 0;
                    break;
                }
            }
            if (count == 1) {
                return i;
            }
        }
        return -1;
    }
}