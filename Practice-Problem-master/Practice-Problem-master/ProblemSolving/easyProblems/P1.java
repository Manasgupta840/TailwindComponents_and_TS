package ProblemSolving.easyProblems;

/**
 * https://www.techiedelight.com/data-structures-and-algorithms-problems/
 * Find a pair with the given sum in an array
 * Input:
 *
 * nums = [8, 7, 2, 5, 3, 1]
 * target = 10
 *
 * Output:
 *
 * Pair found (8, 2)
 * or
 * Pair found (7, 3)
 *
 */
public class P1 {

    public static void pairfound(int arr[],int sum){
        boolean found = false;
        for(int i = 0;i< arr.length-1;i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] == sum) {
                    System.out.println("Pair found"+" ("+arr[i]+", "+arr[j]+")");
                    found = true;
                }
            }
        }
        if(!found){
            System.out.println("Pair not found");
        }

    }

    public static void main(String[] args) {
        int[] arr = new int[]{8, 7, 2, 5, 3, 1};
        P1.pairfound(arr,10);
    }

}
