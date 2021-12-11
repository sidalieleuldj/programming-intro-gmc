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

login("eerrr", 1234);
login("sidali", 14785);
login("sidali", 1234);

var a = 5;
var b = 10;
var c = 15;

var list = [];

function storevariables() {
  list[0] = a;
  list[1] = b;
  list[2] = c;
  console.log(list , list.length);
}

storevariables();
