package B.Classes_and_methods;

 // Constructor is basically a method you dont need to call and is running automatically when a class is called
class Machine{
	private String name;
	private int serial_number;
	public Machine(int serial_number) { // name has to be the same as class
		System.out.println("First constructor running...");
		name = "Matej";
		this.serial_number = serial_number;
	}
	public Machine(String name){
		System.out.println("Second constructor running...");
		this.name = name;}
	public Machine(String name, int serial_number) {
		System.out.println("Third contructor running");
		this.name = name;
		this.serial_number = serial_number;
	}

	// calling a constructor in a constructor

	public Machine(){

		this("Adam"); // calls the constructor where only a String is needed (second one)
        // this() has to be the first line in the constructor, you cant call more than one in a constructor
		}

		}

public class G_Constructors {
	public static void main(String[] args) {
		// calling the 1st one
		Machine machine1 = new Machine(3); // calling the class runs the method, because its a constructor
		// calling the 2nd one
		Machine machine2 = new Machine("Belicko"); // java knows what arguments must be given to run a specific constructor, this runs the second one
		// calling the 3rd one
		Machine machine3 = new Machine("Erik", 9); // runs the 3rd one because specific arguments for it were given
		//calling the 4th one
		Machine machine4 = new Machine(); // this calls the 4th one which has the 2st one in it




	}
}
