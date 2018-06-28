
/* 
Accepts an employee object and returns individual employees using this format:
  <article class="employee">
    <header class="employee__name">
      <h2>Rainu Ittycheriah</h1>
    </header>
    <section class="employee__department">
      Works in the ${IT} department
    </section>
    <section class="employee__computer">
      Currently using a ${Surface Pro laptop} computer
    </section>
  </article>
*/

const $ = require("jquery");
const getValue = require("./getValue");
// Required by: list-employees

const displayEmployee = (employee) => {
  const $employeeCard = $("<article>").addClass("employee");

  const $nameHeader = $("<header>").addClass("employee__name");
  const employeeName = employee.name;
  $("<h2>").text(employeeName).appendTo($nameHeader);
  $nameHeader.appendTo($employeeCard);

  const $deptSection = $("<section>").addClass("employee__department");
  let employeeDepartmentName;
  const departmentId = employee.department;
  getValue("departments", departmentId)
  .then(response => {
    employeeDepartmentName = response.departmentName;
    console.log(employeeDepartmentName);
  });
  $deptSection.text(`Works in the ${employeeDepartmentName} department`);
  $deptSection.appendTo($employeeCard);

  const $cpuSection = $("<section>").addClass("employee__computer");
  let employeeComputerType;
  const computerId = employee.computer;
  getValue("computers", computerId)
  .then(response => {
    employeeComputerType = response.computerType;
    console.log(employeeComputerType);
  });
  $cpuSection.text("Currently using a ${computerType} computer");
  $cpuSection.appendTo($employeeCard);
  console.log($employeeCard);
  return $employeeCard;
};

$.ajax("http://localhost:3000/employees/3")
.then(response => {
  console.log(response);
  displayEmployee(response);
});