package ProblemSolving.easyProblems;

/**
 * Move all zeros present in an array to the end
 * Google Translate Icon
 * Given an integer array, move all zeros present in it to the end. The solution should maintain the relative order of items in the array and should not use constant space.
 *
 * For example,
 *
 * Input:  { 6, 0, 8, 2, 3, 0, 4, 0, 1 }
 *
 * Output: { 6, 8, 2, 3, 4, 1, 0, 0, 0
 */
public class P17 {

    public static void approach1(int arr[]){

        int k = 0;

        for (int i = 0; i<arr.length;i++){
            if(arr[i] != 0){
                arr[k] = arr[i];
                k++;
            }
        }
        for(int j = k;j< arr.length;j++){
            arr[j] = 0;
        }

        for(int i = 0;i< arr.length;i++){
            System.out.print(arr[i]+" ");
        }
    }

    public static void partitionApproach(int arr[]){
        int k =0;
        for(int i = 0;i<arr.length;i++){
            if(arr[i] != 0){
                int temp = arr[i];
                arr[i] = arr[k];
                arr[k] = temp;
                k++;
            }
        }
        for(int i = 0;i< arr.length;i++){
            System.out.print(arr[i]+" ");
        }
    }

    public static void main(String[] args) {
        int[] arr = new int[]{8, 0, 2, 0, 3, 0,7,5,0,1};
        P17.approach1(arr);
        System.out.println();
        P17.partitionApproach(arr);
    }
}
