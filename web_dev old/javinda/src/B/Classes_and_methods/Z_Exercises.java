package B.Classes_and_methods;

import java.util.Scanner;

public class Z_Exercises {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);


		// EXERCISE // - IS IT A LEAP YEAR ?
		class Exercise{
			String is_a_leap_year(){
				System.out.println("ENTER A YEAR: ");
				int year = scanner.nextInt();
				if (year%4 == 0){
					return year +" Is a leap year";}
				else{
					return year + " Is NOT a leap year";}
			}
		}
		Exercise answer = new Exercise();
		String IsLeapYear = answer.is_a_leap_year();
		System.out.println(IsLeapYear);


		// EXERCISE // - AVERAGE OF NUMBERS

		class Exercise2{
			int averageOfNumbers(){
				System.out.println("How many numbers do you want to average?: ");
				int reps = scanner.nextInt(); // how many times do I ask

				int[] MyArray = new int[reps]; // makes an Array
				int num; // makes "num" global
				int ko = 0; // makes "ko" global, it cant be empty like "num"
				for(int repeats = 0; repeats < reps; repeats++){ // repeats as many times as "reps"
					System.out.println("Number: ");
					num = scanner.nextInt(); // asks for the number
					MyArray[ko] = num; // adds the input number to a list
					ko++;} // makes it so that every number you add wont be in the [0] position
				int theTotal = 0; // makes "theTotal" global
				for (int il : MyArray){
					theTotal += il; }     // sums the whole array
				theTotal = theTotal / reps; // array / number of numbers you inputted
				return theTotal; // returns the average
				}
			}

		Exercise2 testik = new Exercise2();
		int TheResult = testik.averageOfNumbers(); // calls it
		System.out.println("The result is " + TheResult); // prints it


	}}

