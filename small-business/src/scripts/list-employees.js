// This module gets all the employees and iterates over them, displaying each one to a div which is then prepended to the body

const $ = require("jquery");
const displayEmployee = require("./display-employee");
// Required by: main

const listEmployees = () => {
  // Get all the employees from the database
  $.ajax("http://localhost:3000/employees")
    .then(response => {
      const allEmployees = response;
      console.log(allEmployees);

      // Iterate over the employees, adding them to a div
      const $employeeDiv = $("<div>");
      allEmployees.forEach(employee => {
        const currentEmployee = displayEmployee(employee);
        $employeeDiv.append(currentEmployee);
      });
      // Prepend the section to the body element
      $employeeDiv.prependTo($("body"));
    });
};

module.exports = listEmployees;