// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let addAnother = true;
let masterEmployeeArray = [];

// Collect employee data
const collectEmployees = function() {
  let employeesArray = [];
  while (addAnother) {
    //Collect employee data
    let firstName = prompt("Enter the employee's first name:");
    let lastName = prompt("Enter the employee's last name:");
    let salary = prompt("Enter the employee's salary:");
    //Validate the salary
    if (isNaN(salary)) {
      salary = prompt("Enter the employee's salary as a number:");
      if (isNaN(salary)) {
        salary = 0;
      }
    }
    //Add the employee to the array
    employeesArray.push({firstName, lastName, salary});
    //Ask if the user wants to add another employee
    addAnother = confirm("Would you like to add another employee?");
  }
  //Return the array of employees
  masterEmployeeArray += employeesArray;
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Calculate the average salary
  let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += parseInt(employeesArray[i].salary);
  }
  let averageSalary = totalSalary / employeesArray.length;
  // Display the average salary
  console.log("The average salary between our " + employeesArray.length + " employee(s) is " + averageSalary);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // Select a random employee
  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  let randomEmployee = employeesArray[randomIndex];
  // Display the random employee
  console.log("Congratulations to " + randomEmployee.firstName + " " + randomEmployee.lastName + " for being selected as the random employee!");
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  addAnother = true;
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
