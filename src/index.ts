export { };

// ⛔️ 'X' only refers to a type, but is being used as a value here.ts(2693)

// EXAMPLE 1 - Use `instanceof` with a class instead

class Employee {
  constructor(public name: string, public salary: number) {
    this.name = name;
    this.salary = salary;
  }
}

const emp = new Employee('Bobby Hadz', 100);

if (emp instanceof Employee) {
  // 👇️ this runs
  console.log('✅ is instance of Employee');
}

console.log(emp instanceof Employee); // 👉️ true

// ---------------------------------------------------

// // EXAMPLE 2 - Setting class properties

// class Employee {
//   name = '';
//   salary = 0;
//   tasks: string[] = [];
// }

// const emp = new Employee();

// emp.name = 'Bobby Hadz';
// emp.salary = 100;
// emp.tasks.push('test');

// if (emp instanceof Employee) {
//   // 👇️ this runs
//   console.log('✅ is instance of Employee');
// }

// console.log(emp instanceof Employee); // 👉️ true

// ---------------------------------------------------

// // EXAMPLE 3 - Using a user-defined type guard instead of `instanceof`

// interface Employee {
//   id: number;
//   name: string;
//   salary: number;
// }

// function isAnEmployee(obj: any): obj is Employee {
//   return 'id' in obj && 'name' in obj && 'salary' in obj;
// }

// const emp: Employee = {
//   id: 3,
//   name: 'Bobby Hadz',
//   salary: 300,
// };

// console.log(isAnEmployee(emp)); // 👉️ true

// console.log(isAnEmployee({ id: 1 })); // 👉️ false

// if (isAnEmployee(emp)) {
//   // 👉️ TypeScript knows that emp is type Employee
//   console.log(emp.id); // 👉️ 3
//   console.log(emp.name); // 👉️ "Bobby Hadz"
//   console.log(emp.salary); // 👉️ 300
// }

// ---------------------------------------------------

// // EXAMPLE 4 - Adding a `type` property to the interface

// interface Employee {
//   id: number;
//   name: string;
//   salary: number;
//   type: 'Employee'; // 👈️ add type property
// }

// function isAnEmployee(obj: any): obj is Employee {
//   // 👇️ check for type property
//   return 'type' in obj && obj.type === 'Employee';
// }

// const emp: Employee = {
//   id: 3,
//   name: 'Bobby Hadz',
//   salary: 300,
//   type: 'Employee',
// };

// console.log(isAnEmployee(emp)); // 👉️ true
// console.log(isAnEmployee({ id: 1 })); // 👉️ false

// if (isAnEmployee(emp)) {
//   console.log(emp.id); // 👉️ 3
//   console.log(emp.name); // 👉️ "Bobby Hadz"
//   console.log(emp.salary); // 👉️ 300
//   console.log(emp.type); // 👉️ "Employee"
// }