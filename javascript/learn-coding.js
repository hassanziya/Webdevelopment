// var name = "hassan";
// var age = 23;
// var shootingScore = 45.6;
// var message = "Hi, My name is " + name + " and I am " + age + " years old";
// alert(message);
// var firstName = "john";
//var lastName = "jacobJingle";
//var age = 23;
// var profileImageUrl = "http//coolpicks/johnjacob.jpg";
// var loginWelcomeMessage =
//   "Welcome " + firstName + " Happy " + age + "rd birthday";
// console.log(loginWelcomeMessage);
// var sum = 10 + 15;
// var sub = 15 - 10;
// var mod = 10 % 3;
// var message = "10 / 3 = 3 with a remainder of " + mod;
// var result = 10 * ((5 - 3) * 4);
// console.log(result);
//
//

// Conditionals And comparison operators

// var myAccountBalance = 300;
// var nikeSBShoes = 799.23;
// var coupon = 500;
// if (nikeSBShoes <= myAccountBalance) {
//   myAccountBalance -= nikeSBShoes;
//   console.log("we just bought a new shoe");
//   console.log("Acount balance  " + myAccountBalance);
// } else if (nikeSBShoes - coupon <= myAccountBalance) {
//   console.log("We just Bought some dope shoes with coupon!");
//   myAccountBalance -= nikeSBShoes - coupon;
//   console.log("account balance " + myAccountBalance);
// } else {
//   console.log("you too broke for shoes bra!");
// }

// logical operator

// var cat1 = 5;
// var cat2 = 10;
// var cat3 = 1;
// var cat3DisabledHadicap = true;
// if (cat1 > cat2 && cat1 > cat3 && !cat3DisabledHadicap) {
//   console.log("cat1 is the cutest");
// } else if (cat2 > cat1 && cat2 > cat3 && !cat3DisabledHadicap) {
//   console.log("cat2 is the cutest");
// } else if ((cat3 > cat1 && cat3 > cat2) || cat3DisabledHadicap) {
//   console.log("cat3 is cutest");
// }

// Arrays in Java Sripct

// var students = ["Timmy", "Jannesa", "Arun"];
// var naughtyList = [];
// naughtyList.push(students[0]);
// console.log(naughtyList);
// var index = naughtyList.indexOf("Timmy");
// if (index > -1) {
//   naughtyList.splice(index, 1);
// }
// console.log(naughtyList);

//****************Loops***********

// var someVal = 10;
// for (var x = 0; x < someVal; x++) {
//   console.log(x);
// }

// var students = ["john", "jacob", "jingle", "heimer", "smith"];
// var length = students.length;
// for (var x = 0; x < length; x++) {
//   console.log(students[x]);
// }

// *****************Functions********************

// function area(length, width) {
//   return length * width;
// }
// var rectangle = [];
// rectangle.push(area(4, 6));
// rectangle.push(area(2, 6));
// rectangle.push(area(4, 7));
// console.log(rectangle);

// var bankBalance = 500;
// function makeTransaction(priceOfSale) {
//   if (priceOfSale <= bankBalance) {
//     bankBalance -= priceOfSale;
//     console.log("purchase Succesful");
//   } else {
//     console.log("insufficient Fund");
//   }
// }
// console.log("remaining bank Balance " + bankBalance);
// makeTransaction(79.99);
// console.log("remaining bank Balance " + bankBalance);
// makeTransaction(2.32);
// console.log("remaining bank Balance " + bankBalance);
// makeTransaction(10.45);
// console.log("remaining bank Balance " + bankBalance);
// makeTransaction(450.0);

// ******************Objects*******************

// var students = [];

// function student0(first, last, age) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.greeting = function () {
//     return "Hi I'm " + this.firstName + " and I'm " + this.age + " years Old";
//   };
// }

// students.push(new student0("jenny", "laga", 5));
// students.push(new student0("Timmy", "turner", 8));
// students.push(new student0("Carl", "Jr", 4));
// students.push(new student0("hassan", "ziya", 20));

// var s1 = new student0("jenny", "laga", 5);
// console.log(s1);
// console.log(s1.greeting());
// var student = {
//   firstName: "jayne",
//   lastName: "looo",
//   age: 8,
// };
// console.log(student.greeting());

// var student1 = new Object();
// student1.firstName = "john";
// student1.lastName = "Parker";
// student1.age = 7;

// students.push(student);
// students.push(student1);

// for (var index = 0; index < students.length; index++) {
//   var student = students[index];
//   console.log(student.greeting());
// }

// ***********Bind*********

this.car = "honda Civic w/ Ugly Spoiler";

var marksGrage = {
  car: "astom Martin",
  getCar: function () {
    return this.car;
  },
};
console.log(marksGrage.getCar());
var storeGetCarForLater = marksGrage.getCar;

console.log(storeGetCarForLater());

var theRealFunction = marksGrage.getCar.bind(marksGrage);
console.log(theRealFunction());
