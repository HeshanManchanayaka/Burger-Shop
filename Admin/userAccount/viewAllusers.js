function loadCustomers() {
    const customers = JSON.parse(localStorage.getItem("customers")) || [];
  
    if (customers.length === 0) {
      Swal.fire("No customers found.");
      return;
    }
  
    const tableBody = document.getElementById("customerTableBody");
    tableBody.innerHTML = ""; 
  
    customers.forEach((customer, index) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${customer.name}</td>
        <td>${customer.email}</td>
        <td>${customer.phone}</td>
        <td>${customer.address}</td>
      `;
  
      tableBody.appendChild(row);
    });
  }
  
  window.onload = loadCustomers;
  