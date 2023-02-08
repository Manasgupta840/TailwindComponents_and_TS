package ProblemSolving.easyProblems;

/**
 * Given a binary array, sort it in linear time and constant space.
 * The output should print all zeroes, followed by all ones.
 * Input:  { 1, 0, 1, 0, 1, 0, 0, 1 }
 *
 * Output: { 0, 0, 0, 0, 1, 1, 1, 1 }
 */
public class P4 {

    private void printArray(int[] arr){
        for(int i= 0;i< arr.length;i++){
            System.out.print("___"+arr[i]+" ");
        }
    }
    void Approach1(int arr[]){
        int i = 0;
        while(i<arr.length){
                for(int j = i+1;j<arr.length;j++){
                    if(arr[j]==0){
                        int temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                        break;
                    }
                }
            i++;
        }
        printArray(arr);
    }

    /**
     *count the total number of 0’s present in the array, say k, and fill the first k indices in the array by 0 and all remaining indices by 1
     *  time complexity of the below solution is O(n)
     * @param arr
     */
    void approach2(int arr[]){
        int count = 0;
        int i =0;
        while (i<arr.length){
            if(arr[i] == 0){
                count++;
                arr[i]=1;
            }
            i++;
        }
        for(int j=0;j<count;j++){
            arr[j] = 0;
        }
        printArray(arr);
    }
    public static void main(String[] args) {
        int[] arr = new int[]{ 1, 0, 1, 0, 1, 0, 0, 1 };
        P4 p4 = new P4();
        p4.Approach1(arr);
        p4.approach2(arr);
    }
}
