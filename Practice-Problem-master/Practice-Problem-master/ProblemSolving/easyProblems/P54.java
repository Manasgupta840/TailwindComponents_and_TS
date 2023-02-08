package ProblemSolving.easyProblems;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

/**
 *
 * Partition an array into two subarrays with the same sum
 * Google Translate Icon
 * Given an integer array, partition it into two subarrays having the same sum of elements.
 *
 * For example,
 *
 * Input:  {6, -4, -3, 2, 3}
 *
 * Output: The two subarrays are {6, -4} and {-3, 2, 3} having equal sum of 2
 *
 *
 * Input:  {6, -5, 2, -4, 1}
 *
 * Output: The two subarrays are {} and {6, -5, 2, -4, 1} having equal sum of 0
 */
public class P54 {

    public static int partitionIndex(int arr[]){
        int sum = Arrays.stream(arr).sum();
        int sum_so_far = 0;
        for(int i = 0;i < arr.length;i++){
            if(sum_so_far == sum-sum_so_far){
                return  i;
            }
            sum_so_far += arr[i];
        }

        return -1;
    }

    public static void partion(int arr[], int i , int j) {
        System.out.println(IntStream.range(i, j + 1)
                .mapToObj(k -> arr[k])
                .collect(Collectors.toList()));
    }
    public static void main(String[] args) {
        int[] arr = new int[]{6, -5, 2, -4, 1};
        int index = P54.partitionIndex(arr);
        if(index != -1){
            partion(arr,index,index-1);
            partion(arr,index, arr.length-1);
        }
        else
            System.out.println("There is no Partion");
    }
}
