function generatefullname(firstname, lastname , surname) {
  if (typeof firstname == "string") {
    if (typeof lastname == "string") {
      if (typeof surname == "string") {
        var fullname = firstname + " " + lastname + " " + surname;
        console.log(fullname);
      } else {
        console.log("surname is not string");
      }
    } else {
      console.log("lastname is not string");
    }
  } else {
    console.log("fistname is not string");
  }
}

generatefullname("eleuldj", "sidali" , "sidou");
