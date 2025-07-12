<#include "mockData.ftl">
<!DOCTYPE html>
<html>
<head>
  <title>Employee Dashboard</title>
  <link rel="stylesheet" href="../styles/main.css">
</head>
<body>
  <header>
    <h1>Employee Directory</h1>
    <input type="text" id="searchInput" placeholder="Search by name or email">
    <button onclick="window.location.href='form.ftl'">Add Employee</button>
  </header>

  <div class="filters">
    <select id="sortSelect">
      <option value="">Sort By</option>
      <option value="firstName">First Name</option>
      <option value="department">Department</option>
    </select>
  </div>

  <div id="employeeList">
    <#list employees as emp>
      <div class="employee-card" data-id="${emp.id}">
        <p><strong>${emp.firstName} ${emp.lastName}</strong></p>
        <p>${emp.email}</p>
        <p>${emp.department} | ${emp.role}</p>
        <button onclick="editEmployee(${emp.id})">Edit</button>
        <button onclick="deleteEmployee(${emp.id})">Delete</button>
      </div>
    </#list>
  </div>

  <script src="../scripts/app.js"></script>
</body>
</html>
