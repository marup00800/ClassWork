let count = 0;

function collectData() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Collected data from form");
  console.log(email);
  console.log(password);

  if (!email) {
    document.getElementById("emailErr").innerHTML = "Email is required";
    valid = false;
  } 
  else if (!email.includes("@")) {
    document.getElementById("emailErr").innerHTML = "Email must contain @";
    valid = false;
  } 
  else {
    document.getElementById("emailErr").innerHTML = "";
  }

  if (!password) {
    document.getElementById("passwordErr").innerHTML = "Password is required";
  } else if (password.length <= 6) {
    document.getElementById("passwordErr").innerHTML =
      "Password must be at least 6 characters long";
  }else if(!password.includes("#")){
    document.getElementById("passwordErr").innerHTML =
      "Password must contain #";
  } else {
    document.getElementById("passwordErr").innerHTML = "";
  }

  if(!valid){
    count++;
document.getElementById("count").innerHTML = "Count: " + count;
}
return false;

}



function getEmail() {
  const email = document.getElementById("email").value;
  console.log("Given email is...", email);
}

function getPassword() {
  const password = document.getElementById("password").value;
  console.log("Given password is...", password);
}
