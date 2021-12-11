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
  console.log(list, list.length);
}

storevariables();

function arrayliste1() {
  var list = [];
  for (var i = 0; i < 10; i++) {
    list[i] = i + 1;
  }
  console.log(list);
}

arrayliste1();

function arrayliste() {
  var list = [];
  for (var i = 1; i <= 10; i++) {
    list.push(i * 2);
  }
  console.log(list);
}

arrayliste();

function arrayliste2() {
  var anotherliste = [];
  for (var i = 1; i <= 10; i++) {
    if (anotherliste.length < 5) {
      anotherliste.push(i * 2);
    } else {
      return anotherliste;
    }
  }

  return anotherliste;
}

var result = arrayliste2();
console.log(result);

function moystudent() {
  var studentlist = [10, 12.5, 15, 20, 8, 9];
  var somme = 0;
  for (i = 0; i < studentlist.length; i++) {
    somme = somme + studentlist[i];
  }
  var moy = somme / studentlist.length;
  console.log(moy);
}

moystudent();
