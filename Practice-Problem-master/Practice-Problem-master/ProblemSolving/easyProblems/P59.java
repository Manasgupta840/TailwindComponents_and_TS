package ProblemSolving.easyProblems;

import java.util.HashSet;
import java.util.Set;

/**
 *Find the minimum index of a repeating element in an array
 *
 * Given an integer array, find the minimum index of a repeating element in linear time and doing just a single traversal of the array.
 *
 * For example,
 *
 * Input:  { 5, 6, 3, 4, 3, 6, 4 }
 * Output: The minimum index of the repeating element is 1
 *
 *
 * Input:  { 1, 2, 3, 4, 5, 6 }
 * Output: Invalid Input
 */
public class P59 {
    public static void setApproach(int arr[]){
        Set<Integer> set = new HashSet<>();
        int min = -1;
        for(int i = arr.length-1;i>=0;i--){
            if(set.contains(arr[i])){
                min = i;
            }
            set.add(arr[i]);
        }
        if(min == -1){
            System.out.println("Invalid Input");
        }
        else {
            System.out.println("The minimum index of the repeating element is "+min);
        }
    }
    public static void main(String[] args) {
        int[] arr = new int[]{  1, 2, 3, 4, 5, 6 };
        setApproach(arr);
    }
}
