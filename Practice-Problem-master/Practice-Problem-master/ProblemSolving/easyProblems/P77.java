package ProblemSolving.easyProblems;

import java.util.HashMap;
import java.util.Map;

/**
 * Find duplicates within a range `k` in an array
 * Given an array and a positive number k,
 * check whether the array contains any duplicate elements within the range k.
 * If k is more than the array’s size, the solution should check for duplicates in the complete array.
 *
 * For example,
 *
 * Input:
 *
 * nums[] = { 5, 6, 8, 2, 4, 6, 9 }
 * k = 4
 *
 * Output: Duplicates found
 *
 * (element 6 repeats at distance 4 which is <= k)
 *
 *
 * Input:
 *
 * nums[] = { 5, 6, 8, 2, 4, 6, 9 }
 * k = 2
 *
 * Output: No duplicates were found
 *
 * (element 6 repeats at distance 4 which is > k)
 *
 *
 * Input:
 *
 * nums[] = { 1, 2, 3, 2, 1 }
 * k = 7
 *
 * Output: Duplicates found
 *
 * (element 1 and 2 repeats at distance 4 and 2, respectively which are both <= k)
 */
public class P77 {

    public static void slidingwindowApproach(int[] arr,int k){

        Map<Integer,Integer> elementIndexMap = new HashMap<>();

        for(int i =0;i< arr.length;i++){
            if(elementIndexMap.containsKey(arr[i])){
                System.out.println("Duplicates found in range");
                return;
            }
            elementIndexMap.put(arr[i],i);
            if(i>=k){
                elementIndexMap.remove(arr[i-k]);
            }
        }
        System.out.println("Duplicates not found");
        return;
    }

    public static void main(String[] args) {
        int[] arr = new int[]{5, 6, 8, 2, 4, 6, 9};
        int k = 2;
        slidingwindowApproach(arr,k);
    }
}
