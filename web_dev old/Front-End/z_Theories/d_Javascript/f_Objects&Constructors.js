var taxiDriver1 = {
  age: 16,
  name: "jake",
  skills: ["one", "two"],
};

var taxiDriver2 = {
  age: 20,
  name: "paul",
  skills: ["something", "idk"],
};
taxiDriver2.age = 32; // you can change it later outisde if u want to
console.log(taxiDriver2.age);

// hard to do for more same things, if i have a lot of taxidrivers, its annoying

// Constructors

function TaxiDriver(name, age, skills) {
  // making the object creator (constructor)

  this.name = name; // this object is going to have a "name" property, its going to be = to the input above
  this.age = age;
  this.skills = skills;
}

var TaxiDriver3 = new TaxiDriver("jake", 18, ["one", "two"], 120); // making an object

console.log(TaxiDriver3.age);

// to add to a constructor, you can only use prototype:
TaxiDriver.prototype.height = 150; // prototype
console.log(TaxiDriver3.height);
