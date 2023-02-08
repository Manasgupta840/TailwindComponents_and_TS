package ProblemSolving.easyProblems;

import java.util.Arrays;

/**
 * Find majority element (Boyer–Moore Majority Vote Algorithm)
 * Google Translate Icon
 * Given an integer array containing duplicates, return the majority element if present. A majority element appears more than n/2 times, where n is the array size.
 *
 * For example, the majority element is 2 in array {2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2}.
 */

public class P16 {

    public static void bruteforce(int arr[]){
        int count = 0;
        int num = 0;
        for(int i= 0;i < arr.length;i++){
            int count1 = 0;
            for(int j = 0; j< arr.length;j++){
                if(arr[i] == arr[j]){
                    count1++;
                }
            }
            if(count1>count){
                count = count1;
                num = arr[i];
            }
        }
        System.out.println(num);
    }

    public static void sortingApproach(int arr[]){
        Arrays.sort(arr);
        int count = 0;
        int num = 0;
        int count1=0;
        for(int i = 0; i< arr.length-1;i++){

            if(arr[i]==arr[i+1]){
                count++;
            }
            else
                count =0;
            if(count > count1){
                count1 = count;
                num = arr[i];
            }

        }
        if(num == 0 && count1 == 0){
            System.out.println("There is no repeation in the array");
            return;
        }
        System.out.println("Count is "+(count1+1)+" number is "+num);
    }

    public static void optimized(int arr[]){
        int  count = 0;
        int num =0;
        for(int i =0;i< arr.length;i++){

            if(count==0){
                num = arr[i];
                count++;
            } else if (arr[i] == num) {
                count++;
            }else {
                count--;
            }
        }
        System.out.println(num);
    }


    public static void main(String[] args) {

        int[] arr = new int[]{2, 8, 7, 7, 7, 5, 7, 3, 1, 7, 7};
        P16.bruteforce(arr);
        P16.sortingApproach(arr);
        P16.optimized(arr);
    }
}
