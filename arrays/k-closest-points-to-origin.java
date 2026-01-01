package com.simply.todo;

import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;

class Solution {
    private record Point(int x, int y, int distance) implements Comparable<Point> {
        @Override
        public int compareTo(Point other) {
            return -Integer.compare(this.distance, other.distance);
        }
    }

    public int[][] kClosest(int[][] pointsInput, int k) {
        List<Point> points = Arrays.stream(pointsInput)
                .map(point -> new Point(point[0], point[1], point[0] * point[0] + point[1] * point[1]))
                .toList();

        PriorityQueue<Point> q = new PriorityQueue<>();

        for (Point point: points) {
            if (q.size() < k) {
                q.add(point);
            } else if (q.peek().distance > point.distance) {
                q.remove();
                q.add(point);
            }
        }

        return q.stream()
                .map(point -> new int[]{point.x, point.y})
                .toArray(int[][]::new);
    }
}
