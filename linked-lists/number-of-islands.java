class Solution {

    record Point(int x, int y) {}

    private Set<Point> visited;

    private void dfs(int x, int y, char[][] grid) {
        Point point = new Point(x, y);
        if (this.visited.contains(point) || grid[x][y] == '0') {
            return;
        }
        visited.add(point);
        List<Point> directions = List.of(new Point(0, -1), new Point(1, 0), new Point(0, 1), new Point(-1, 0));
        for (Point direction: directions) {
            int nextX = point.x + direction.x;
            int nextY = point.y + direction.y;
            if (nextY < 0 || nextY >= grid[0].length || nextX < 0 || nextX >= grid.length) {
                continue;
            }
            this.dfs(nextX, nextY, grid);
        }
    }
    
    public int numIslands(char[][] grid) {
        visited = new HashSet<>();
        int islandsCount = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (!visited.contains(new Point(i, j)) && grid[i][j] == '1') {
                    islandsCount++;
                    this.dfs(i, j, grid);
                }
            }
        }
        return islandsCount;
    }
}
