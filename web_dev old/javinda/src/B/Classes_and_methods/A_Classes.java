package B.Classes_and_methods;



// classes can be written above public class or in main

// classes can contain 1. DATA (this) , 2.Subroutines (methods)
class Animal{
	String name;
	int weight;}
class Human3{
	String name; // these are instances
	int age;
	int height;
	String occupation;}


public class A_Classes {
	// You can only have 1 public class in a file
	public static void main(String[] args) {


		Human3 person1 = new Human3(); // Arguments: Variable_type variable_name = new class_type();
		person1.name = "Matej";
		person1.age = 15;
		person1.occupation = "Anime expert";
		System.out.println(person1.name);

		Animal dog1 = new Animal();
		dog1.name = "Spike";
		dog1.weight = 8;

}}
