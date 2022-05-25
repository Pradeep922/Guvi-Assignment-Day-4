// var request = new XMLHttpRequest();
// request.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// request.send();
// request.onload=function() {
//     var data=JSON.parse(request.response);
//     console.log(data);

//     // Printing the Country Flag

//     // for (var i=0; i<data.length; i++) {
//     //     console.log(data[i].flag);
//     // }

//     // Printing Country Name, Region, Sub Region and Population
//     for (var i=0; i<data.length; i++) {
//         console.log("Country Name: " + data[i].name);
//         console.log("Country Region: " + data[i].region);
//         console.log ("Population: " + data[i].population);
//         console.log ("Sub-Region:" + data[i].subregion);
//     }
// }

// Declare four variables without assigning values and print them in console

// var a = [];
// var b = []; 
// var c = []; 
// var d = []; 

// console.log(a, b, c, d);

// Declare variables to store your first name, last name, marital status, country and age in multiple lines

// var firstName = "Pradeep";
// var lastName = "Raj";
// var maritalStatus = "Un-married";
// var country = "India";
// var age = 25;

// console.log(firstName, lastName, maritalStatus, country, age);

// Declare variables to store your first name, last name, marital status, country and age in a single line

// var firstName = "Pradeep", lastName = "Raj", maritalStatus="Un-married", country="India", age="25";

// console.log(firstName, lastName, maritalStatus, country, age);

// Declare variables and assign string, boolean, undefined and null data types

// let str = "I am 25 years old.";
// console.log(str);

// let age = 25;
// if (age == 25) {
//     console.log("I am 25 years old.");
// } else {
//     console.log("Invalid age");
// }

// let str1 = "You are 30 years old.";
// console.log(str1);

// let age1 = 30;
// if (age1 == 30) {
//     console.log("You are 30 years old.");
// } else {
//     console.log("Invalid age");
// }

// Square of a number

// let a = 3;
// console.log("Square of number is " + a*a);

// // Swapping 2 numbers

// let c = 4;
// let d = 5;

// let temp;
 
// temp = c;
// c = d;
// d = temp;

// console.log(`The value of a after swapping: ${c}`);
// console.log(`The value of b after swapping: ${d}`);

// Addition of 3 numbers

// var a = 2;
// var b = 3;
// var d = 5;

// console.log("Sum is " + (a+b+d));

// Celsius to Fahrenheit conversion

// const celsius = 20;

// const fahrenheit = 1.8 * celsius + 32;

// console.log(`${celsius} Celsius = ${fahrenheit} Fahrenheit`);

// Meter to miles

// const meter = 3;

// const miles = meter*0.00062137;

// console.log(miles);

// Pounds to kg

// const pound = 5;
// const Kg  = pound*0.453592;

// console.log(Kg);

// Calculate Batting Average

// const batsmen1 = 46;
// const batsmen2 = 78;

// average = batsmen1+batsmen2/2;

// console.log(average);

// Calculate five test scores and print their average

// const batsmen1 = 67;
// const batsmen2 = 46;
// const batsmen3 = 89;
// const batsmen4 = 90;
// const batsmen5 = 87;

// average = batsmen1+batsmen2+batsmen3+batsmen4+batsmen5/5;

// console.log(average);

// Power of any number x ^ y.
 
// let x = Math.pow(4, 3);
// console.log(x);

// Calculate Simple Interest

// var p = 4000;
// var t = 3;
// var r = 2;

// si = parseInt((p*t*r)/100 );

// console.log(si);


// Calculate area of an equilateral triangle

// const side1 = 5;
// const side2 = 9;
// const side3 = 7;

// const s = (side1 + side2 + side3) / 2;

// const areaValue = Math.sqrt(
//     s * (s - side1) * (s - side2) * (s - side3)
//   );
  
//   console.log(
//     `The area of the triangle is ${areaValue}`
//   );

// Find area of a triangle.

// const b = 6;
// const h = 3;

// Area = 0.5*b*h;

// console.log(Area);

// Given their radius of a circle and find its diameter, circumference and area.

// const r = 5;

// Diameter = 2*r;
// circumference = 2*3.14*r;
// Area = 3.14*r*r;

// console.log(circumference, Diameter, Area);

// Given two numbers and perform all arithmetic operations.

// const a = 6;
// const b = 4;

// console.log("Addition:" + (a+b));
// console.log("Subtraction:" + (a-b));
// console.log("Multiplication:" + (a*b));
// console.log("Division:" + (a/b));
// console.log("Exponentiation:" + a**b);
// console.log("Modules:" + (a%b));


// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####     
// #####
// ######
// #######

// for (var i = "#"; i.length < 8; i += "#")
//   console.log(i);

// Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

// let foods = ["Chicken", "Briyani", "Burger", "Pizza", "Potato", "Sausage", "Pasta", "Sausage", "Fried Rice", "Curd", "Paneer", "Salad", "Tandoori", "Roti", "Gobi", "Cake", "Ice cream", "Naan"];

// console.log(foods[4]);
// console.log(foods.length);

// let friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK-chandran"];


// friends[0] = "Munnabai";
// console.log(friends);

// let friends1 = friends.slice(0,3);
// console.log(friends1);

// var friends1 = [
//     "Mari",
//     "MaryJane",
//     "CaptianAmerica",
//     "Munnabai",
//     "Jeff",
//     "AAK chandran"
//     ];

//     var friends2 = [
//         "Gabbar",
//         "Rajinikanth",
//         "Mass",
//         "Spiderman",
//         "Jeff",
//         "ET"
//         ];

//         friends = [...friends1, ...friends2];
//         console.log(friends);

//         // First Name
//   console.log(friends[0]);

// //   Last Name
//   const last = friends[friends.length- 1];
//   console.log(last);   
  
//  console.log(friends.unshift("Pradeep"));
//  console.log(friends.push("Kumar"));
//  console.log(friends);

//  console.log(friends=friends1.concat(friends2));

//  average = friends.join('').length / friends.length      
//  console.log(average);

