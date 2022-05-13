package A;

import java.util.Scanner;
import java.util.Random;

public class loops {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);


//           // WHILE LOOPS //

        int count = 0;
        while (count < 10) {
            System.out.println("hello");
            System.out.println(count);    // "break;" breaks the loop, "pass" continues the loop
            count++;}


        ///////////////////////
          // DO WHILE LOOP //
		///////////////////////
		int value; // You cant declare "int value" inside {} because they will not be global, you have to declare it outside
		do{
			System.out.println("please enter 5: "); // does this until while loop equals FALSE
			value = scanner.nextInt();
		}
		while(value != 5);




        // FOR LOOPS //

        for (int i = 0; i < 5; i++) { // 3 arguments

            System.out.println(i);}   // 1. executed before loop starts
                                      // 2. while  this condition is true, loop continues
                                      // 3. executed every round of the loop, can just be written inside the loop smh
                                      // they are separated by ";" , they can be empty



////////////////////////////////////////////////////////////////////////////
		//   EXERCISES EXERCISES EXERCISES EXERCISES //
////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////
		// EXERCISE: nasobky cisiel //           FOR LOOP
////////////////////////////////////////////



        System.out.println("Nasobky cisla: ");
        int divider = scanner.nextInt();
        System.out.println("Check from 0 to : ");
        int range = scanner.nextInt();
        for(int i = 1;i<range;i++){
            if(i%divider == 0) {
                System.out.printf("Cislo %d je nasobok cisla %d \n", i, divider);}




////////////////////////////////////////////////
	// EXERCISE: guess my number game //      WHILE LOOP
////////////////////////////////////////////////

		Random rng = new Random();

		int tries = 3;
		int myNumber = rng.nextInt(20);
		System.out.println("Im thinking of a number from 1 to 20...");


		while(true){
			if (tries == 0){
				System.out.println("You have no more tries left, my number was "+ myNumber);
				break;

			}

			System.out.println("Guess my number: ");
			int guess = scanner.nextInt();
			if (guess != myNumber){
				tries--;
				if (guess > myNumber){
					System.out.printf("Lower!, you have %d tries left... \n", tries);}
				else if (guess < myNumber){
						System.out.printf("Higher!, you have %d tries left... \n", tries);
					}
			}
			else{
				System.out.println("You guessed it!");
				break;
			}
		}

}}}