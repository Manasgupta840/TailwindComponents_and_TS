package ProblemSolving.easyProblems;

import java.util.Arrays;

/**
 * Given an integer array, find the maximum product of two integers in it.
 * For example, consider array {-10, -3, 5, 6, -2}. The maximum product is the (-10, -3) or (5, 6) pair.
 */
public class P7 {

    public static void approach1(int arr[]){
        Arrays.sort(arr);
        if(arr.length<2){
            return;
        }
        if((arr[0] *arr[1] )>= (arr[arr.length-1] * arr[arr.length-2])){
            System.out.println("The maximum product is the ("+arr[0]+", "+arr[1]+")");
        }
        else{
            System.out.println("The maximum product is the ("+arr[arr.length-1]+", "+arr[arr.length-2]+")");
        }
    }
    public static void approach2(int arr[]){
        int min = Integer.MAX_VALUE;
        int secondMin = 0;
        int max = 0;
        int secondMax = 0;

        for(int i = 0;i<arr.length;i++){
                if(arr[i]>max){
                    secondMax = max;
                    max = arr[i];
                } else if (arr[i] >secondMax) {
                    secondMax = arr[i];
                }
                else if(arr[i]<min){
                    secondMin = min ;
                    min = arr[i];
                } else if (arr[i] < secondMin) {
                    secondMin = arr[i];
                }
            
        }
        System.out.println(min+" "+secondMin+" "+max+" "+secondMax);
        if(min *secondMin >= max*secondMax){
            System.out.println("The maximum product is the ("+min+", "+secondMin+")");
        }
        else {
            System.out.println("The maximum product is the ("+max+", "+secondMax+")");
        }
    }

    public static void main(String[] args) {
        int arr[] = new int[]{-10, -3, 5, 6, -2};
        P7.approach1(arr);
        P7.approach2(arr);

    }
}
