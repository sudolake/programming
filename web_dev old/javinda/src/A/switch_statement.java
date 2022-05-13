package A;

import java.util.Scanner;
public class switch_statement {
    public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.println("Please enter a command: ");
		String command = scanner.nextLine();
		System.out.println("Please enter your age: ");
		int age = scanner.nextInt();

switch(command) {

	case "start":
		System.out.println("System has started");
		break;
	case "stop":
		System.out.println("System has stopped");
		break;
	default: // if none of them are True, has to be at the end of switch
		System.out.println("Command not recognized");
}
switch(age){
	case 1,2,3,4:
		System.out.println("youre an infant");
	default:
		System.out.println("idk");
}














	}}