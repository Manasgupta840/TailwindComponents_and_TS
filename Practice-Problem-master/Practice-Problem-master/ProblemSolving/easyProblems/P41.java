package ProblemSolving.easyProblems;

/**
 * Maximum Product Subset Problem
 * Google Translate Icon
 * Given an integer array, find the maximum product of its elements among all its subsets.
 *
 * For example,
 *
 * Input:  nums[] = { -6, 4, -5, 8, -10, 0, 8 }
 *
 * Output: The maximum product of a subset is 15360
 *
 * The subset with the maximum product of its elements is { -6, 4, 8, -10, 8 }
 *
 * Input:  nums[] = { 4, -8, 0, 8 }
 *
 * Output: The maximum product of a subset is 32
 *
 * The subset with the maximum product of its elements is { 4, 8 }
 */
public class P41 {

    public static void approach1(int arr[]){
        int multiply = 1;
        int min = Integer.MAX_VALUE;
        int secondmin =0;
        for(int i =0;i< arr.length;i++){
            if(arr[i] == 0){
                continue;
            }
            if(arr[i]>0){
                multiply *= arr[i];
            }
            else {
                if(arr[i]< min){
                    secondmin = min;
                    min = arr[i];

                }
                if(arr[i] < secondmin && arr[i] > min){
                    secondmin = arr[i];
                }
            }
        }
        if(secondmin == Integer.MAX_VALUE){
            secondmin = 0;
        }
        if((min * secondmin)>0){
            multiply *= (min*secondmin);
        }
        System.out.println("The maximum product of a subset is "+multiply);
    }
    public static void main(String[] args) {
        int[] arr = new int[]{-6, 4, -5, 8, -10, 0, 8  };
        P41.approach1(arr);
    }
}
