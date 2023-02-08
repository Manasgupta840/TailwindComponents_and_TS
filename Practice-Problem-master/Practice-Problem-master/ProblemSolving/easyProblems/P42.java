package ProblemSolving.easyProblems;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

/**
 * Given an unsorted integer array, print all pairs with a given difference k in it.
 *
 * For example,
 *
 * Input:
 *
 * arr = [1, 5, 2, 2, 2, 5, 5, 4]
 * k = 3
 *
 * Output:
 *
 * (2, 5) and (1, 4)
 */

public class P42 {

    public static void approach1(int arr[],int diff){
        Set<Integer> set = new HashSet<>();
        int count =0;
        if(diff==0){
            Arrays.sort(arr);
            for(int i =0; i< arr.length-1;i++){
                if(arr[i] == (arr[i+1])){
                    if(set.contains(arr[i])){
                        continue;
                    }
                    else{
                        count++;
                    }
                }
                set.add(arr[i]);
            }
            System.out.println(count);
            return;
        }


        for(int i : arr){
            set.add(i);
        }

        for(Integer i : set){
             if (set.contains(i+diff)) {
                System.out.println("("+i+", "+(i+diff)+")");
                count++;
            }
        }
        System.out.println(count);
    }
    public static void main(String[] args) {
        int[] arr = new int[]{1, 5, 2, 2, 2, 5, 5, 4};
        P42.approach1(arr,3);
    }
}
