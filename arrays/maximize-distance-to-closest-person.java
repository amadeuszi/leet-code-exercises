package com.simply.todo;

import java.util.*;
class Solution {
    public int maxDistToClosest(int[] seats) {
        int maxDist = 0;

        int firstOne = 0;
        for (int i = 0; i < seats.length; i++) {
            if (seats[i] == 1) {
                firstOne = i;
                maxDist = i;
                break;
            }
        }

        int lastOne = seats.length - 1;
        for (int i = seats.length - 1; i >= 0; i--) {
            if (seats[i] == 1) {
                lastOne = i;
                maxDist = seats.length - 1 - i;
                break;
            }
        }

        int currentGap = 0;
        for (int i = firstOne; i <= lastOne; i++) {
            if (seats[i] == 0) {
                currentGap++;
            } else {
                maxDist = Math.max((int) Math.ceil((double) currentGap / 2), maxDist);
                currentGap = 0;
            }
        }

        return maxDist;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] seats = {1, 0, 0, 0, 1};
        int result = solution.maxDistToClosest(seats);

        System.out.println("Result: " + result);
    }
}
