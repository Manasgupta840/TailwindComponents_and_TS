package ProblemSolving.easyProblems;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Find an index of the maximum occurring element with equal probability
 * Google Translate Icon
 * Given a non-empty integer array, find the index of the maximum occurring element with an equal probability.
 *
 * For example, consider the input: {4, 3, 6, 8, 4, 6, 2, 4, 5, 9, 7, 4}. The maximum occurring element, 4, occurs at index 0, 4, 7, and 11.
 * The solution should return any one of these indices with an equal probability.
 * If there are two maximum occurring elements in the array,
 * the solution should consider the first occurring maximum element.
 */
public class P61 {

    public static void approach1(int[] arr) {
        Map<Integer,Integer> integerMap = new LinkedHashMap<>();
        for(Integer i: arr){
            integerMap.put(i,integerMap.getOrDefault(i,0)+1);
        }
        int max = Integer.MIN_VALUE;
        int key = 0;
        for(Map.Entry<Integer, Integer> value:integerMap.entrySet()){
            if(value.getValue() > max){
                max = value.getValue();
                key = value.getKey();
            }
        }
        for(int i =0;i<arr.length;i++){
            if(arr[i] == key){
                System.out.println("The index of the maximum occurring element is "+i);
            }
        }
    }
    public static void main(String[] args) {
        int[] arr = new int[]{6, 4, 6, 8, 4, 6, 2, 4, 6, 9, 7, 4};
        approach1(arr);
    }
}
