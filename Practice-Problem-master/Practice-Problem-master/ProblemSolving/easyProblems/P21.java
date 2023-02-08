package ProblemSolving.easyProblems;

import java.util.Arrays;

/**
 * Maximum Sum Subarray Problem (Kadane’s Algorithm)
 * Google Translate Icon
 * Given an integer array, find a contiguous subarray within it that has the largest sum.
 *
 * For example,
 *
 * Input:  {-2, 1, -3, 4, -1, 2, 1, -5, 4}
 *
 * Output: Subarray with the largest sum is {4, -1, 2, 1} with sum 6.
 */
public class P21 {

    public static void approach1(int arr[]){
        int maximum = Arrays.stream(arr).max().getAsInt();

        // if the array contains all negative values, return the maximum element
        if (maximum < 0) {
            System.out.println(maximum);
            return;
        }

        int max = Integer.MIN_VALUE;
        int sum =0;

        for(Integer item : arr){

            sum += item;
            if(sum>max){
               max = sum;
            }
            if(sum < 0){
                sum = 0;
            }
        }
        System.out.println(max);
    }

    public static void main(String[] args) {
        int[] arr = new int[]{-2, -1, 0, 1, 1, 2, -1, -5, -4};
        P21.approach1(arr);
    }
}
