function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  var userLength = userEntered.length;
  var passLength = passEntered.length;
  
  //Username test conditions
  if(userLength < 6)
  {
    document.getElementById("usernameError").innerHTML="Username must have at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  if(userEntered.indexOf(' ') > 0)
  {
    document.getElementById("usernameError").innerHTML="Username cannot contain a space.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else
  {
    document.getElementById("usernameGroup").classList.add("has-success");
  }

  //Password test conditions
  if(passEntered.toLowerCase() == "password")
  {
    document.getElementById("passwordError").innerHTML="Password cannot be 'password'.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");  
  }
  if(passEntered == userEntered)
  {
    document.getElementById("passwordError").innerHTML="Password cannot match username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error"); 
  }
  if(passLength < 6 || passLength > 20)
  {
    document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else
  {
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}