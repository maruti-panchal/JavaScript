// Scenario
/**
 * 1) Register
 * 2) Send Welcome email
 * 3) Login
 * 4) Get user data
 * 5) Display user data
 */

// this is Synchrnous function means one by one execute
// other fuction will wait until register function has done it work.
// so that we have to a Asynchronus method by using setTimeout method.
function register() {
  setTimeout(() => {
    console.log("Register End");
  }, 1000);
}
function sendEmail() {
  setTimeout(() => {
    console.log("Email End");
  }, 1000);
}
function login() {
  setTimeout(() => {
    console.log("Login End");
  });
}
function gotUserData() {
  setTimeout(() => {
    console.log("Got user data");
  });
}
function displayUserData() {
  console.log("User data displayed");
}

register();
sendEmail();
login();
gotUserData();
displayUserData();
