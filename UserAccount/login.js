let customers;
function loginData(event) {
    event.preventDefault();
    const loginEmail = document.getElementById("email").value;
    const loginPassword = document.getElementById("password").value;

     customers = JSON.parse(localStorage.getItem("customers"));
    if (!customers) {
        Swal.fire("No users registered.");
        return;
    }

    const user = customers.find((customer) => customer.email === loginEmail);

    if (!user) {
        Swal.fire("User not found.");
        return;
    }

    if (user.password !== loginPassword) {
        Swal.fire("Invalid password.");
        return;
    }

    Swal.fire(`Welcome back, ${user.name}!`)
    .then(() => {
        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        console.log(user);
        location.href = "../Admin/userAccount/userAccount.html";
    });
   
}