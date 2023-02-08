package ProblemSolving.easyProblems;

import java.util.Arrays;

/**
 * Find the index that divides an array into two non-empty subarrays with equal sum
 * Given an integer array, find an index that divides it into two non-empty subarrays having an equal sum.
 *
 * For example, consider array {-1, 6, 3, 1, -2, 3, 3}.
 * The element 3 at index 2 divides it into two non-empty subarrays {-1, 6} and {1, -2, 3, 3}
 * having the same sum. Please note that the problem specifically targets subarrays that are contiguous
 * (i.e., occupy consecutive positions) and inherently maintains the order of elements.
 */
public class P71 {

    public static int approach1(int[] arr){
        if(arr.length<2){
            return -1;
        }
        int left = arr[0];
        int sum = Arrays.stream(arr).sum();
        int i = 1;
        while(i<arr.length-1){
            if(left == (sum-(left+arr[i]))){
                return i;
            }
            left += arr[i++];
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] arr = new int[]{0, 1,-1,1};
        System.out.println(approach1(arr));

    }
}
