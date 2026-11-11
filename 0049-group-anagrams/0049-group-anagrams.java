class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> data = new HashMap<>();
        for (String str : strs) {
            int[] freq = new int[26];
            for (char ch : str.toCharArray()) {
                freq[ch - 'a']++;
            }
            String key = Arrays.toString(freq);
            if (!data.containsKey(key)) {
                data.put(key, new ArrayList<>());
            }
            data.get(key).add(str);
        }
        return new ArrayList<>(data.values());
    }
}