package A;
import java.util.Scanner;
public class innput {
	public static void main(String[] args) {

			Scanner scanner = new Scanner(System.in); // making the scanner

			System.out.println("What is ur name?: ");
			String s1 = scanner.nextLine(); // makes the input a string, reads the whole input
			System.out.println(s1+" is a nice name");

			Integer s2 = scanner.nextInt();
			var combine = 2020-s2; // what year you were born in

			// CONVERTING //

			// FIRST WAY //
			int conversion = Integer.valueOf(scanner.nextLine()); // CREATING + CONVERTING in one line

			// SECOND WAY //
			String s3 = scanner.nextLine();
			int convertToInt = Integer.valueOf(s3); // converts a string to an int


			// CALCULATOR // /////////////////////////////////


			System.out.println("first number: ");
			double n1 = scanner.nextDouble();
			System.out.println("second number: ");
			double n2 = scanner.nextDouble();
			System.out.println("adding|||:     "+n1+" + "+n2+" = "+(n1+n2));
			System.out.println("substracting|||:     "+n1+" - "+n2+" = "+(n1-n2));
			System.out.println("dividing|||:     "+n1+" / "+n2+" = "+(n1/n2));
			System.out.println("multiplying|||:     "+n1+" * "+n2+" = "+(n1*n2));

			int n1_int = (int)n1;
			int n2_int = (int)n2;
			int n3 = n1_int % n2_int;
			System.out.println("dividing with remainder:|||     "+n1+" / "+n2+" = "+(n1_int/n2_int)+"1 remainder. "+n3);

			}
		}

