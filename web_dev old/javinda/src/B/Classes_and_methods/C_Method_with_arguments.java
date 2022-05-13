package B.Classes_and_methods;


class Robot{
	void move(int x, int y) { // these are arguments / parameteres
		System.out.println("moving to X:" + x + " Y:" + y);
	}
	void speak(String text) {
		System.out.println(text);
	}

}
public class C_Method_with_arguments {
	public static void main(String[] args) {


		Robot john = new Robot();

		john.move(20 ,50);

		String greeting = "Hello, I am John";
		john.speak(greeting);













	}
}
