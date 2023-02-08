package ProblemSolving.easyProblems;

import java.util.ArrayList;
import java.util.List;

/**
 * Find equilibrium index of an array
 */

public class P14 {

    public static void approach1(int arr[]){
        List<Integer> indices = new ArrayList<>();
        for(int i = 0;i< arr.length;i++){
            int sum1 = 0;
            for(int j = 0; j<i;j++){
                sum1 += arr[j];
            }
            int sum2 = 0;
            for(int k = i+1; k< arr.length;k++){
                sum2 += arr[k];
            }
            if(sum1 == sum2){
                indices.add(i);
            }
        }
        System.out.println("Equilibrium Index found at "+indices);
    }

    public static void approach2(int arr[]){
        int sum = 0;
        List<Integer> indices = new ArrayList<>();
        for(int i : arr){
            sum += i;
        }
        int left = 0;

        for(int i =0; i< arr.length;i++){
            if(left == sum-(arr[i]+left)){
                indices.add(i);
            }
            left += arr[i];
        }
        System.out.println("Equilibrium Index found at "+indices);

    }

    public static void main(String[] args) {
        int arr[] = new int[]{ 0, -3, 5, -4, -2, 3, 1, 0 };
        P14.approach1(arr);
        P14.approach2(arr);
    }
}
