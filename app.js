function register() {
  if (
    document.getElementById("name").value == "" ||
    document.getElementById("email").value == "" ||
    document.getElementById("password").value == ""
  ) {
    document.getElementById("success").style.display = "none";
  } else {
    document.getElementById("success").style.display = "inline-block";
  }
}
function checkPassword() {
  var pattern =
    /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*_])[\w!@#$%^&*]{6,}$/;
  var password = document.getElementById("password").value;
  if (pattern.test(password)) {
    document.getElementById("warning").style.display = "none";
  } else {
    document.getElementById("warning").style.display = "inline-block";
  }
}
