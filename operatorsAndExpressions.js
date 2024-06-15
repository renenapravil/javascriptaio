// OPERATORS AND EXPRESSIONS

// Expression is piece of code that resolved to a value -> two types: assigns value or resolves to a value or both

chapter = 4;
99 + 1;
x = x + 1;

// You can express youself differently, few example same result

x += 1;
++x;
x=(-(~x));

// operator precedence, each operator has a precedence value 1-19, highest value operator runs first
// multiplication * and division / have value 13, addition + and dubtraction - value 12, assignment = value 2

x = 5 - 1 / 2;

// 1 will be divided by 2, 0.5
// .5 will be subtracted from 5, 4.5
// 4.5 will be assigned to x

// if more operators with the same precendece? -> associativity (= direction in which the operators are evaluated)
// left-associativity means that left side of the operator is evaluated first, right-associativity means that right side of the operator is evaluated first
// arithmetic operators have left-associativity(except the exponential operator), assignment operators have right-associativity

x = 4-5-2/2*2; // -3

// Grouping operator ()

x = (4-5-2) / (2*2); // 0.75

// You can chain = 

x = y = z = 0; // right-associativity meaning 0 is assigned to the z, z to y, y to x; all variables 0

/* 
Comparison Operators (return a bollean):

==      equality, 3 == "3", true
!=      inequality, 3 != 3, false same for 3 != "3"
===     strict equality, 3 === "3", false
!==     strict inequality, 3 !== "3", true
>       greater than
>=      greater or equal
<       less than
<=      less than or equal

== and != check only the value, not the data type
=== and !== check alsp the data type
*/

// comparing numbers and strings is a bad form, also use parseInt() or parseFloat() to convert strings to numbers and toString() to convert numbers to string and use strict equality or inequality

a = parseInt("3");
b = parseInt("5");
a === b; // false

// Concatenation operator "+" joins two strings

let yourName = "Rene Napravil";
let welcomeMessage = "Welcome, " + yourName;
console.log(welcomeMessage);

/*
Arithmetic operators
+   addition
-   subtraction
*   multiplication
/   division
%   remainder; 5 % 2 = 5 / 2 = 2 => 1 remaining
++  increment; a = ++b or a = b++ or a++
--  decrement; same
**  exponentiation 
*/

// Always check the data type!

let sum = 1 + "1"; // result 11
let sum = 1 + parseInt("1"); //result 2

/*

Logical operators
&&  AND
||  OR
!   NOT

*/

let language = userPreference.language || "English"; // this statement set the language to user preferred language, if not set it will set English
let logInScreen = !loggedIn && showLogInScreen(); // if loggedIn is falsy the showLogInScreen() function will run, = switching between two paths = conditional rendering = some piece of user interface should show only if condition is true

// || and && are short-circuit operators = they stop executing and return value when they find truthy value (||) or falsy value (&&)
// NOT operator ! is often used to test whether a variable hasn't been initialized or is false

if (!isRegistered) { alert ("Register now!"); }

// Using double NOT can convert any value to boolean 

!!"I like cheese" // returns true
