
/* 
Accepts an employee object and displays individual employees using this format:
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

const displayEmployee = (employee) => {
  const $employeeCard = $("<article>").addClass("employee");

  const $nameHeader = $("<header>").addClass("employee__name");
  const employeeName = employee.name;
  $("<h2>").text(employeeName).appendTo($nameHeader);
  $nameHeader.appendTo($employeeCard);

  const $deptSection = $("<section>").addClass("employee__department");
  let departmentName;
  const departmentId = employee.department;
  getValue("departments", departmentId)
  .then(response => {
    departmentName = response.departmentName;
    console.log(departmentName);
  });
  $deptSection.text(`Works in the ${departmentName} department`);
  $deptSection.appendTo($employeeCard);

  
};