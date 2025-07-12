let employeeData = JSON.parse(localStorage.getItem("employees")) || [
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", department: "IT", role: "Developer" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", department: "HR", role: "Manager" },
    { id: 3, firstName: "Ravi", lastName: "Kumar", email: "ravi@example.com", department: "Finance", role: "Analyst" }
  ];
  
  function saveToStorage() {
    localStorage.setItem("employees", JSON.stringify(employeeData));
  }
  
  function renderEmployeeList(data = employeeData) {
    const list = document.getElementById('employeeList');
    if (!list) return;
    list.innerHTML = '';
    data.forEach(emp => {
      const card = document.createElement('div');
      card.className = 'employee-card';
      card.innerHTML = `
        <p><strong>${emp.firstName} ${emp.lastName}</strong></p>
        <p>${emp.email}</p>
        <p>${emp.department} | ${emp.role}</p>
        <button onclick="editEmployee(${emp.id})">Edit</button>
        <button onclick="deleteEmployee(${emp.id})">Delete</button>
      `;
      list.appendChild(card);
    });
  }
  
  document.getElementById('searchInput')?.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const filtered = employeeData.filter(emp =>
      emp.firstName.toLowerCase().includes(query) ||
      emp.email.toLowerCase().includes(query)
    );
    renderEmployeeList(filtered);
  });
  
  document.getElementById('employeeForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const id = document.getElementById('empId').value;
    const newEmp = {
      id: id ? parseInt(id) : Date.now(),
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      department: document.getElementById('department').value,
      role: document.getElementById('role').value
    };
    if (!validateEmail(newEmp.email)) {
      document.getElementById('errorMsg').innerText = "Invalid email format";
      return;
    }
    if (id) {
      const index = employeeData.findIndex(emp => emp.id === parseInt(id));
      employeeData[index] = newEmp;
    } else {
      employeeData.push(newEmp);
    }
    saveToStorage();
    window.location.href = 'index.ftl';
  });
  
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  function deleteEmployee(id) {
    employeeData = employeeData.filter(emp => emp.id !== id);
    saveToStorage();
    renderEmployeeList();
  }
  
  function editEmployee(id) {
    const emp = employeeData.find(e => e.id === id);
    if (!emp) return;
    localStorage.setItem("editing", JSON.stringify(emp));
    window.location.href = 'form.ftl';
  }
  
  window.onload = () => {
    const form = document.getElementById("employeeForm");
    if (form) {
      const editing = JSON.parse(localStorage.getItem("editing"));
      if (editing) {
        document.getElementById("empId").value = editing.id;
        document.getElementById("firstName").value = editing.firstName;
        document.getElementById("lastName").value = editing.lastName;
        document.getElementById("email").value = editing.email;
        document.getElementById("department").value = editing.department;
        document.getElementById("role").value = editing.role;
        localStorage.removeItem("editing");
      }
    } else {
      renderEmployeeList();
    }
  }
  