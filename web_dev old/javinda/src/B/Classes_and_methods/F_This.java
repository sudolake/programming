package B.Classes_and_methods;





  // TRY AVOIDING THIS, ITS ONLY USED WHEN 2 VARIABLES ARE THE SAME, OTHERWISE USE THE METHOD USED IN E_Set_methods (file)

class Humanoid{
	 String name; // instance
	 int age;
	public void setName(String name){ // if I set the argument var name the same as the instances(the one above)
//	    name = name; // the "name" refers to the closest one = the argument one above
		this.name = name; // this.name refers to the instance (one at the top)
		// this whole things makes sure to change the String name instance variable to setName name
	}
	public void setAge(int age){
		this.age = age;
	}

	public void setInfo(String name, int age){
		setName(name);
		setAge(age);
	}





}


public class F_This {
	public static void main(String[] args) {
		Humanoid person11 = new Humanoid();

		person11.setName("Matej"); // calls it + sets "Matej" as name



	}
}
