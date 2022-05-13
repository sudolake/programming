package A;

import java.util.Scanner;
public class if_statement {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("how old are you ?");
        int s1 = Integer.valueOf(scanner.nextLine());
        String s2 = "No";
        int man, woman,boy, girl;
        man = 30;
        boy = 20;
        girl = 30;


        if (s1 == 18){ }

        else if (s1 != 15){ } // if previous is not true, move here

        else { } // if all of them are false, do this

        if (boy > 15 && girl < 50) // && = and//
        if (man > 50 || man < 30){}    //     || = or , write by pressing: shift + backslash



    }
}
