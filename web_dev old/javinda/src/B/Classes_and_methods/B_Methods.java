package B.Classes_and_methods;
      // classes can be written anywhere, im main, in public class, above public class
import java.util.Scanner;

	// subroutines in classes are called "methods"
	// They are like def() in Python3
	// as def() in Python, methods also need to be called
	// method name should start with a small letter

class Human2{
	String name;
	int age;
	void greeting(){ // <-- METHOD
		System.out.println("Hello, I am " + name);
		}}

public class B_Methods { // / methods
	public static void main(String[] args) {


		Scanner scanner = new Scanner(System.in);


		 // class

		Human2 person1 = new Human2();
		person1.name = "Matej";
		person1.greeting(); // CALLING THE METHOD



}}
