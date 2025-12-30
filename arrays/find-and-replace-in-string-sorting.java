
class Solution {
    record Replacement(int index, String source, String target) {}

    public String findReplaceString(String s, int[] indices, String[] sources, String[] targets) {
        List<Replacement> replacements = new ArrayList<>();
        for (int i = 0; i < indices.length; i++) {
            replacements.add(new Replacement(indices[i], sources[i], targets[i]));
        }
        replacements.sort(Comparator.comparingInt(r -> r.index));

        StringBuilder result = new StringBuilder();

        int index = 0;
        int i = 0;
        while (i < s.length()) {
            Replacement replacement = index < replacements.size() ? replacements.get(index) : new Replacement(-1, "", "");
            int sourceIndex = replacement.index;
            String target = replacement.target;
            String source = replacement.source;

            if (i == sourceIndex && s.startsWith(source, sourceIndex)) {
                result.append(target);
                i += source.length();
                index++;
            } else if (i == sourceIndex) {
                index++;
            } else {
                result.append(s.charAt(i));
                i++;
            }
        }

        return result.toString();
    }
}
