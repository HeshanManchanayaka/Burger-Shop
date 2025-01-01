let customer = [];

function storeData(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  if (password !== confirmPassword) {
    Swal.fire("Passwords do not match!");
    return;
  }
      const user = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        address: address,
    };
  customer.push(user);
  console.log(customer);
  localStorage.setItem("customers", JSON.stringify(customer));
  Swal.fire("Registration Successful!");
  document.getElementById("registrationForm").reset();
}

