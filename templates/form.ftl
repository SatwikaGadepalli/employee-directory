<!DOCTYPE html>
<html>
<head>
  <title>Add/Edit Employee</title>
  <link rel="stylesheet" href="../styles/main.css">
</head>
<body>
  <h2>Add/Edit Employee</h2>
  <form id="employeeForm">
    <input type="hidden" id="empId">
    <label>First Name: <input type="text" id="firstName" required></label>
    <label>Last Name: <input type="text" id="lastName" required></label>
    <label>Email: <input type="email" id="email" required></label>
    <label>Department: <input type="text" id="department" required></label>
    <label>Role: <input type="text" id="role" required></label>
    <button type="submit">Save</button>
  </form>

  <div id="errorMsg" style="color:red;"></div>

  <script src="../scripts/app.js"></script>
</body>
</html>
