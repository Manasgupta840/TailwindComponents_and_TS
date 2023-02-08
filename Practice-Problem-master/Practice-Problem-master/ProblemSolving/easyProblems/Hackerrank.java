package ProblemSolving.easyProblems;

import java.util.*;

public class Hackerrank {
    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        List<Integer> aIntegers = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
        String n = sc.nextLine();
        String str = sc.nextLine();
        String[] arrOfStr = str.split(" ", -2);
        Arrays.stream(arrOfStr).mapToInt(Integer::parseInt).forEach(aIntegers::add);

        int m = Integer.parseInt(sc.nextLine());
        while(m>0){
            String query = sc.nextLine();
            if(Objects.equals(query, "Insert")){
                String insert = sc.nextLine();
                String[] arrOfStr1 = insert.split(" ", -2);
                aIntegers.add(Integer.parseInt(arrOfStr1[0]),Integer.parseInt(arrOfStr1[1]));
            }
            else{
                int index = Integer.parseInt(sc.nextLine());
                aIntegers.remove(index);
            }
            m--;
        }
        aIntegers.forEach(x -> System.out.print(x+" "));
    }
}
