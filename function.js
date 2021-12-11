var originalusername = "sidali";
var originalpassword = 1234;

function login(username, password) {
  if (username == originalusername) {
    if (password == originalpassword) {
      console.log("login seccesfuly");
    } else {
      console.log("wrong password");
    }
  } else {
    console.log("this user does not exist in our db");
  }
}

login("eerrr" , 1234);
login("sidali" , 14785);
login("sidali" , 1234);
