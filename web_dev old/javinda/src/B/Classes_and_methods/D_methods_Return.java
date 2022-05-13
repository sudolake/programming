package B.Classes_and_methods;

class Adult {
	String name;
	int age;

	int YearsToRetirement() { // void returns nothing, int - knows that it should return an int
		int YearsLeft = 65 - age;
		return YearsLeft;
	}

	String getName() { // very simple method, returns a String...
		return name;
	}
}
public class D_methods_Return {
	public static void main(String[] args) {

		// CALLING THE RETURN

		Adult person = new Adult();
		person.name = "Matej";
		person.age = 15;
		int YearsToRetire = person.YearsToRetirement(); // calls the methods return, basically: what returns is stored here
		System.out.println("Years till retirement: " + YearsToRetire);

		String AdultName = person.getName();
		System.out.println(AdultName);

	}}
