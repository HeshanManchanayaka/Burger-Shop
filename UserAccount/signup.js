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

  // Fetch the existing customers from localStorage (or an empty array if none exist)
  const storedCustomers = JSON.parse(localStorage.getItem("customers")) || [];

  // Create the new user object
  const user = {
    name: name,
    email: email,
    password: password,
    phone: phone,
    address: address,
  };

  // Add the new user to the customers array
  storedCustomers.push(user);

  // Save the updated customers array back to localStorage
  localStorage.setItem("customers", JSON.stringify(storedCustomers));

  console.log(storedCustomers); // Log the array of all customers to verify

  Swal.fire("Registration Successful!");
  document.getElementById("registrationForm").reset();
}
