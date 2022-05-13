package B.Arrays;

public class Arrays {
	public static void main(String[] args) {
	//////////////
    // INTEGERS //
	/////////////
		int[] numbers = new int[7]; // array "numbers" CAN ONLY HOLD (custom_number) ints, !NOT MORE!. They are all "0" by default

		// method 1 for longer arrays

		numbers[1] = 20; // The second number in this list is changed to 20

       // using a loop
		for (int ik=0; ik<numbers.length; ik++){ // this loop makes it so that cisielka[0] is 0, [1] is 1 etc.
			numbers[ik] = ik; }
		System.out.println(numbers[1]);

		// method 2 for short arrays

		int[] cisla = {20, 40, 6}; // this is creating a limitless list of values (Strings, ints, doubles etc.)


	// PRINTING THE WHOLE ARRAY // - int

		for (int i=0; i<cisla.length; i++) { // values.length is the length of the arrays list
			System.out.println(cisla[i]);}     // prints the whole list


	/////////////
	// STRINGS //
	/////////////

		// method 1

		String[] teachers = new String[3]; // - null is the default value //
		teachers[0] = "ai-kido";

		// method 2

		String[] names = {"matej", "erik", "lubos"};

	// PRINTING THE WHOLE ARRAY // - String
		for (String meno: names){ // sets the "meno" var to a new name each loop
			System.out.println(meno);}



		// EXERCISE - ADD AN ARRAY

		int[] nums = {20, 10, 40, 52, 6867, 23};

		int sum = 0;
		for (int il : nums){
			sum += il; }

		System.out.println(sum);












	}}

