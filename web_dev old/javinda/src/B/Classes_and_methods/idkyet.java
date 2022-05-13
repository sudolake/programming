package B.Classes_and_methods;



class Thing{

	// static means that its attached to the class, not the object (ex. thing1)

	public String name;
	public static String description; // makes it a class variable
	public static void printDescription(){
		System.out.println(description);
//		System.out.println(name); // I cant access non-static variables here
	}                             // but non-static methods can access static variables
	public static final int LUCKY_NUMBER = 7; // final = constant (cant be reassigned)
}


public class idkyet {
	public static void main(String[] args) {


		Thing thing1 = new Thing(); // static means that its attached to the class, not the object (ex. thing1)
		Thing thing2 = new Thing(); // static means that its attached to the class, not the object (ex. thing1)
		thing1.name = "Erik";
		thing2.name = "Matej";
//		thing1.description   // cant be accessed
		Thing.description = "Hello";
		Thing.printDescription();

		System.out.println(Thing.LUCKY_NUMBER);
	}
}
