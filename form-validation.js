function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  var userLength = userEntered.length;
  var passLength = passEntered.length;
  if(userLength >= 6){
    //document.getElementById("usernameGroup").innerHTML="Good username.";
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  else{
  //Show message that there is an error with the username...
  document.getElementById("usernameError").innerHTML="Bad username.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
  }
  if(passEntered == "password" || passEntered == userEntered){
  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
  }
  else
    document.getElementById("passwordGroup").classList.add("has-success");
}

//indexof(' ' > 0)    reads the string if their is a whitespace and records the index,
//if index is greater than 0, there is a whitespace in the string
//passEntered.toLowercase() to read string and determine if it is password
