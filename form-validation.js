function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  var userLength = userEntered.length;
  var passLength = passEntered.length;
  if(userLength < 6){
    document.getElementById("usernameError").innerHTML="Username must have at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else{
    document.getElementById("usernameGroup").classList.add("has-success");
  }

  if(passEntered == "password"){
    document.getElementById("passwordError").innerHTML="Password cannot be 'password'.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");  
  }
  if(passEntered == userEntered){
    document.getElementById("passwordError").innerHTML="Password cannot match username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error"); 
  }
  if(passEntered < 6 || passEntered > 20){
    document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else
    document.getElementById("passwordGroup").classList.add("has-success");
}

//indexof(' ' > 0)    reads the string if their is a whitespace and records the index,
//if index is greater than 0, there is a whitespace in the string
//passEntered.toLowercase() to read string and determine if it is password
