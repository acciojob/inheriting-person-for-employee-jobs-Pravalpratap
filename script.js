// Define the Person function constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add the greet method to the Person prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

// Define the Employee function constructor
function Employee(name, age, jobTitle) {
    // Call the Person constructor to initialize name and age
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Set up inheritance from Person
Employee.prototype = Object.create(Person.prototype);

// Ensure the constructor property is correctly set for Employee
Employee.prototype.constructor = Employee;

// Add the jobGreet method to the Employee prototype
Employee.prototype.jobGreet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
