package B.Classes_and_methods;

class Human{
	public String name; // creating a name variable
	private int age; // private means that
	public void setName(String newName) { // creating a method that takes a String parameter
		name = newName; // saying that the newName parameter will = name
	}
	public void setAge(int newAge){
		age = newAge;
	}
}

public class E_Set_Methods {
	public static void main(String[] args) {


		Human person1 = new Human(); //  class

		person1.name = "Matej"; // same as below

		person1.setName("Matej"); // same as above, but inside a method = method can be private

		//person1.age = 8; // this is wrong, I cant access it because its private

		person1.setAge(8); // this is right, It can access it because its actually inside the method





// https://www.udemy.com/course/java-tutorial/learn/lecture/139606#content





	}
}
