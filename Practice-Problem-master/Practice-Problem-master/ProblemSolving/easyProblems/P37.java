package ProblemSolving.easyProblems;

/**
 * Sort an array in one swap whose two elements are swapped
 * Google Translate Icon
 * Given an array where all its elements are sorted in increasing order except two swapped elements, sort it in linear time. Assume there are no duplicates in the array.
 *
 * For example,
 *
 * Input:  A[] = [3, 8, 6, 7, 5, 9] or [3, 5, 6, 9, 8, 7] or [3, 5, 7, 6, 8, 9]
 *
 * Output: A[] = [3, 5, 6, 7, 8, 9]
 */

public class P37 {

    public static void approach1(int[] arr){
        int index1 = -1;
        int value = arr[0];
        int index2 = -1;
        for(int i = 1;i< arr.length;i++){

            if(value>arr[i]){
                if(index1 == -1){
                    index1 = i-1;
                    index2 = i;
                }
                else {
                    index2 = i;
                }
            }
            value = arr[i];
        }
        int temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;

        for(int i : arr){
            System.out.print(i+" ");
        }
    }
    public static void main(String[] args) {
        int[] arr = new int[]{3, 5, 7, 6, 8, 9};
        P37.approach1(arr);
    }
}
