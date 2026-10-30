class Solution {
    public int maxArea(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int maxWater = 0;
        while (left < right) {
            int width = right - left;
            int minHeight = 0;
            if (height[left] < height[right]) {
                minHeight = height[left];
            } else {
                minHeight = height[right];
            }
            int area = width * minHeight;
            if (maxWater < area) {
                maxWater = area;
            }
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxWater;
    }
}