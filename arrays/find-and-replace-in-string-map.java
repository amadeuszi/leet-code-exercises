
class Solution {
    public String findReplaceString(String s, int[] indices, String[] sources, String[] targets) {
        Map<Integer, List<Integer>> map = new HashMap<>();
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < indices.length; i++) {
            map.computeIfAbsent(indices[i], __ -> new ArrayList<>()).add(i);
        }

        int i = 0;
        while (i < s.length()) {
            List<Integer> originalIndices = map.get(i);
            if (originalIndices == null) {
                result.append(s.charAt(i));
                i++;
                continue;
            }
            boolean chosen = false;
            for (int original: originalIndices) {
                String source = sources[original];
                String target = targets[original];
                if (s.startsWith(source, i)) {
                    result.append(target);
                    i += source.length();
                    chosen = true;
                    break;
                }
            }
            if (!chosen) {
                result.append(s.charAt(i));
                i++;
            }
        }

        return result.toString();
    }
}
