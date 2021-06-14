function validation() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;

    var namecheck = /^[A-za-z. ]{3,30}$/;
    var usercheck = /^[A-za-z.]{3,30}$/;
    var emailcheck =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,16}$/;

    // name validation 
    if (name == "") {
        document.getElementById("message").innerHTML = "*please fill name"
        return false;
    }
    if (name.length < 3) {
        document.getElementById("message").innerHTML = "*name must be 3 character"
        return false;
    }
    if (name.length > 30) {
        document.getElementById("message").innerHTML = "*name must be less than 20 character"
        return false;
    }
    if (namecheck.test(name)) {
        document.getElementById("message").innerHTML = ""
    }
    else {
        document.getElementById("message").innerHTML = "*name is invalid"
        return false;
    }
    //    username validation 
    if (username == "") {
        document.getElementById("message1").innerHTML = "*please fill username"
        return false;
    }
    if (username.length < 3) {
        document.getElementById("message1").innerHTML = "*username must be 3 character"
        return false;
    }
    if (username.length > 30) {
        document.getElementById("message1").innerHTML = "*username must be less than 30 character"
        return false;
    }
    if (usercheck.test(username)) {
        document.getElementById("message1").innerHTML = ""
    }
    else {
        document.getElementById("message1").innerHTML = "*please enter a valid username"
        return false;
    }
    //    email validation 
    if (email == "") {
        document.getElementById("message2").innerHTML = "*please fill email"
        return false;
      
    }
    if (email.length < 3) {
        document.getElementById("message2").innerHTML = "*email must be 3 character"
        return false;
    }
    if (email.length > 30) {
        document.getElementById("message2").innerHTML = "*email must be less than 30 character"
        return false;
    }
    if (emailcheck.test(email)){
        document.getElementById("message2").innerHTML = ""
    }
    else {
        document.getElementById("message2").innerHTML = "*email is invalid"
        return false;
    }

    //  password validation 
    if (password == "") {
        document.getElementById("message3").innerHTML = "*please fill password"
        return false; 
    }
    if (password.length < 8) {
        document.getElementById("message3").innerHTML = "*password is too short (minimum is 8 character)"
        return false; ``
    }
    if (passwordcheck.test(password)) {
        document.getElementById("message3").innerHTML = ""
    }
    else {
        document.getElementById("message3").innerHTML = "*Your password must be contain at least one number and have a mixture of uppercase and lowercase letters."
        return false;
    }

    // confirm password validation 
    if (cpassword == "") {
        document.getElementById("message4").innerHTML = "*please fill confirm password"
        return false; 
    }
    if (password.match(cpassword)) {
        document.getElementById("message4").innerHTML = ""
    }
    else {
        document.getElementById("message4").innerHTML = "*please make sure your passwords match"
        return false;
    }


}
