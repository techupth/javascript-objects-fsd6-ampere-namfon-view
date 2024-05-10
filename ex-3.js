// Exercise #3 Debugging

// Start coding here
const employee = {
  name: "John Doe",
  age: 18,
  address: {
    street: "123 Main Street",
    city: "Cityville",
    states: "Stateville",
    country: "Countryland",
    postalCode: "12345",
  },
};

console.log("Employee Name: " + employee.name); // change object name from employees to employee
console.log("Employee Age: " + employee.age);
console.log(
  "Employee Address: " +
    employee.address.street +
    ", " +
    employee.address.city +
    ", " +
    employee.address.states + //change object key from state to states
    ", " +
    employee.address.country +
    " " +
    employee.address.postalCode // change object key from adress to address
);
