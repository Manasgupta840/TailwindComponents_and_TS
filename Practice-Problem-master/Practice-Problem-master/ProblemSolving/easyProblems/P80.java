package ProblemSolving.easyProblems;

/**
 * Determine the index of an element that satisfies given constraints in an array
 * Given an integer array, determine the index of an element before which all elements are smaller and after which all are greater.
 *
 * For example,
 * Input:  nums[] = {4, 2, 3, 5, 1, 6, 9, 7}
 *
 * Output: Index 5
 *
 * All elements before index 5 are smaller, and all elements after index 5 are greater.
 */
public class P80 {

    public static void approach1(int[] arr) {
        if(arr.length<=2){
            return;
        }
        int[] left = new int[arr.length];
        left[0] = Integer.MIN_VALUE;

        for(int i = 1;i< arr.length;i++){
            left[i] =Math.max(left[i-1],arr[i-1]);
        }
        int max_so_far = arr[arr.length-1];
        for(int i = arr.length-2;i>0;i--){
            if(left[i]<arr[i] && arr[i]<max_so_far){
                System.out.println("Index is "+i);
                return;
            }
            if(max_so_far>arr[i]){
                max_so_far = arr[i];
            }
        }
        System.out.println("No such Element");
    }
    public static void main(String[] args) {
        int[] arr = new int[]{4, 2, 3, 5, 1, 6, 9, 7};
        approach1(arr);
    }
}
