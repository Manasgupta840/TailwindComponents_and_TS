package ProblemSolving.easyProblems;

/**
 * Find a pair with a minimum absolute sum in an array
 * Given a sorted integer array, find a pair in it having an absolute minimum sum.
 *
 * For example,
 *
 * Input:  A = [-6, -5, -3, 0, 2, 4, 9]
 *
 * Output: Pair is (-5, 4)
 *
 * (-5, 4) = abs(-5 + 4) = abs(-1) = 1, which is minimum among all pairs.
 */
public class P60 {

    public static void approach1(int arr[]){

        int low  = 0;
        int high = arr.length-1;
        int i = 0,j = 0;
        int min = Integer.MAX_VALUE;
        while(low<high){
            if(Math.abs(arr[low]+arr[high]) < min){
                min = Math.abs(arr[low]+arr[high]);
                i = arr[low] ;
                j = arr[high];
            }
            if((arr[low] + arr[high]) < 0){
                low++;
            }
            else
                high--;

        }
        System.out.println("Pair is ("+i + ", "+j+")");

    }

    public static void main(String[] args) {
        int[] arr = new int[]{-6, -5, -3, 0, 2, 4, 9};
        approach1(arr);
    }
}
