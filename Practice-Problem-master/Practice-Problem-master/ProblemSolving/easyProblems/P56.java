package ProblemSolving.easyProblems;

import java.util.Arrays;

/**
 * Find two numbers with maximum sum formed by array digits
 *
 * Given an integer array between 0 and 9, find two numbers with maximum sum formed using all the array digits. The difference in the number of digits of the two numbers should be ± 1.
 *
 * For example,
 *
 * Input:  { 4, 6, 2, 7, 9, 8 }
 * Output: The two numbers with maximum sum are 974 and 862
 *
 *
 * Input:  { 9, 2, 5, 6, 0, 4 }
 * Output: The two numbers with maximum sum are 952 and 640
 * Prac
 */
public class P56 {

    public static void sortingApproach(int[] arr) {
        StringBuilder a= new StringBuilder();
        StringBuilder b = new StringBuilder();
        Arrays.sort(arr);
        boolean flag = true;
        for(int i = arr.length-1;i>=0;i--){
            if (flag){
                a.append(arr[i]);
                flag = false;
            }
            else{
                b.append(arr[i]);
                flag = true;
            }
        }
        System.out.println(a +" "+b);
    }
    public static void main(String[] args) {
        int[] arr = new int[]{ 9, 2, 5, 6, 0, 4 };
        sortingApproach(arr);
    }
}
