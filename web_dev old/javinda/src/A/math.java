package A;

import java.util.Scanner;
public class math {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int multiply = 5*23;
        int divison = 10/2;

        int age = 90;
        double height = 169.0210;
        Boolean job = false;
        String name = "Matej";
        name = "Lubos"; // changing the variable--
        String name2 = "Erik";

        String togather = name + " " + name2;
        System.out.println(togather);



        double flt_division = 10.0/3; // declared a double, must have a decimal point at the end
        double flq = (double)11/3; // second way, just (double) before the number

        int modulo = 5%3; // remaining = 2               <------ MODULO / REMAINDER ----------------


        // AVERAGE OF 3 DOUBLE NUMBERS
        double num1 = Double.valueOf(scanner.nextLine());
        double num2 = Double.valueOf(scanner.nextLine());
        double num3 = Double.valueOf(scanner.nextLine());
        System.out.println("average of these nu mbers is "+(num1+num2+num3)/3);



        int number1 = 5;
        ++number1; // adds 1 to it
        --number1; // takes 1 from it
        number1 += 5; // same as python
        number1 *= 5; // same shit

        // changing  - IMPORTANT IMPORTANT IMPORTANT

        double number2 = (double)number1;
        double numberino = 91.5;
        int numberino2 = (int)numberino;





    }
}
