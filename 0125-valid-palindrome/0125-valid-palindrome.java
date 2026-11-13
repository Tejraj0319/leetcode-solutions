class Solution {
    public static boolean isPalindrome(String s) {
        s = s.trim().toLowerCase();
        String str = "";
        for (int i = 0; i < s.length(); i++) {
            int code = s.charAt(i);
            if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
                str = str + s.charAt(i);
            }
        }
        String reverse = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            reverse = reverse + str.charAt(i);
        }
        return str.equals(reverse);
    }
}