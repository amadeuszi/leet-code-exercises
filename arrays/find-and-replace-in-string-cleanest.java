
class Solution {
    public String findReplaceString(String s, int[] indices, String[] sources, String[] targets) {
        Map<Integer, Integer> validOperations = new HashMap<>();
        StringBuilder result = new StringBuilder();
        
        for (int i = 0; i < indices.length; i++) {
            int index = indices[i];
            if (s.startsWith(sources[i], index)) {
                validOperations.put(index, i);
            }
        }

        int i = 0;
        while (i < s.length()) {
            if (validOperations.containsKey(i)) {
                int index = validOperations.get(i);
                String source = sources[index];
                String target = targets[index];
                result.append(target);
                i += source.length();
            } else {
                result.append(s.charAt(i));
                i++;
            }
        }

        return result.toString();
    }
}
