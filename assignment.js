function validateForm(){
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;


  if (username == ""){
    alert("Username must be filled out.");
    return false;
  }

  if (password == ""){
    alert("Password must be filled out.");
    return false;
  }

  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
    alert("Email must be a valid email address.");
    return false;
  }
  if (email == ""){
    alert("Email must be filled out.");
  }


  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    alert("Password must contain a number, character, a capital letter and a special character.");
    return false;
  }

  if (phone == ""){
    alert("phone must be filled out.");
    return false;
  }
}
function confirmation() {
  console.log("You clicked reset")
  var result = confirm("Are you sure you want to cancel?");
  if(result) {
    document.getElementById(myForm).reset();
  }
}
