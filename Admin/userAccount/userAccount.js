function loadUserAccount() {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  
    if (loggedInUser) {
      document.getElementById("userName").textContent = `Welcome, ${loggedInUser.name}`;
      document.getElementById("userEmail").textContent = loggedInUser.email;
      document.getElementById("userPhone").textContent = loggedInUser.phone;
      document.getElementById("userAddress").textContent = loggedInUser.address;
    } else {
      console.log(loggedInUser);
      
    }
    console.log(loggedInUser);

  }
  
  function logout() {
    sessionStorage.removeItem("loggedInUser"); 
    window.location.href = "../../UserAccount/login.html"; 
  }
  
  window.onload = loadUserAccount;
  