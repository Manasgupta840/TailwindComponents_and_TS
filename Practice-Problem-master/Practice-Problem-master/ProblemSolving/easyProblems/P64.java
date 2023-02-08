package ProblemSolving.easyProblems;

import java.util.ArrayList;
import java.util.List;

/**
 * Given two arrays of positive integers, add their elements into a new array. The solution should add both arrays, one by one starting from the 0th index, and split the sum into individual digits if it is a 2–digit number.
 *
 * For example,
 *
 * Input:
 *
 * a = { 23, 5, 2, 7, 87 }
 * b = { 4, 67, 2, 8 }
 *
 * Output: { 2, 7, 7, 2, 4, 1, 5, 8, 7 }
 *
 *
 * Input:
 *
 * a = {}
 * b = { 4, 67, 2, 8 }
 *
 * Output: { 4, 6, 7, 2, 8 }
 */
public class P64 {

    public static void approach1(int[] arr1,int[] arr2) {
        StringBuilder sum = new StringBuilder();
        int i =0;int j = 0;
        while(i< arr1.length && j< arr2.length){
            int a = arr1[i++];
            int b = arr2[j++];
            int result = (a+b)/10;
            int carry = (a+b)%10;
            if(result != 0){
                sum.append(Integer.toString(result));
            }
            sum.append(Integer.toString(carry));
        }
        while(i< arr1.length){
            int result = arr1[i]/10;
            int carry = arr1[i]%10;
            if(result != 0){
                sum.append(Integer.toString(result));
            }
            sum.append(Integer.toString(carry));
            i++;
        }
        while(j< arr2.length){
            int result = arr2[j]/10;
            int carry = arr2[j]%10;
            if(result != 0){
                sum.append(Integer.toString(result));
            }
            sum.append(Integer.toString(carry));
            j++;
        }
        List<Integer> arrayList = new ArrayList();
        for(int k=0;k < sum.length();k++){
            arrayList.add(Integer.parseInt(String.valueOf(sum.charAt(k))));
            System.out.print(arrayList.get(k)+" ");
        }

    }
    public static void main(String[] args) {
        int[] arr = new int[]{12};

        int[] arr1 = new int[]{4, 67, 2, 8};
        approach1(arr,arr1);
    }
}
