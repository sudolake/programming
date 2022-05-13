package B.Arrays;

public class Multi_dimensional_Arrays {
	public static void main(String[] args) {

		// basically lists in a list in python

		int[][] cisla = new int[5][4]; // these are 2-dimensional, a 3-dimensional would be int[][][]
		cisla[0][0] = 2;

		int[][] numbers = {
				{20, 19, 18},
				{20, 20, 40},
				{50, 10, 2, 9 , 12}};

		String[][] names = {
				{"matej", "lubos"},
				{"Erik"}};

//		System.out.println(names[0][1]); // from first row, second value (lubos)


for (int rows = 0; rows < numbers.length; rows++){ // like in 1-dimensional

	for (int columns = 0; columns < numbers[rows].length; columns++){ //
		System.out.print(numbers[rows][columns] + "\t"); // "\t" is TAB
	}
	System.out.println(); // so that it wont be in 1 row
}


	}
}
