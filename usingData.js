//USING DATA

// I can make calculations with the variables
// Be careful, any inputs from the user comes back as a string so you have to parse it to number
// Without parse 1 + 2 = 12

let firstNumber = prompt("Pick a number!");
let secondNumber = prompt("Pick another number!");

firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

let sum = firstNumber + secondNumber;
alert(sum);

// parseFloat changes string to a number
// partInt changes a number with a decimal point to a number (integer)

//you can use ` (not ') if you want to combine strings without the need of + operator
// just use the {yourVariable}
let totalOrder = 39.99;
let itemPurchased = 'JavaScript All-in-One for Dummies';
let customer = 'Rene Napravil';
let thankYou = `${customer}, thank you for your order of ${itemPurchased}. Your payment of $${totalOrder} was successful.`;
console.log(thankYou);

// Symbols in JS are always unique, even if they are named the same, === means strict equality operator
let symbol1 = Symbol("mySymbol");
let symbol2 = Symbol("mySymbol");
symbol1===symbol2

// If you want to listen for an empty string, you can but a ! (bang) infront of the variable, means NOT
const city = ""
if (!city) {
    alert("City is a required field.")
}

// Same goes for the happy path with two bangs !!, means TRUE
const city = "Dallas"
if (!!city) {
    alert("You filled the City field, Good job!")
}

// charAt tells you the character at a specific position (starting from 0)
let randomLetters = "abcdefg";
randomLetters.charAt(3);

// Concat combines two or more strings and it gives you a result
let houseNumber = "555";
let streetName = "Shady Lane";
houseNumber.concat("", streetName);

// indexOf seachers your string and returns a position of the first occurence of the character you specify
let typeOfTree = "Pine";
typeOfTree.indexOf("e");

// split splits a string into an array of substrings
let listOfVowels = "a, e, i, o, u";
listOfVowels.split(",");

// substring extracts a part of your string between the index points you specify
// if the first index is larger, JS reverses them
let phoneNumber = "602612125";
phoneNumber.substring(3, 7);

// slice does the same thing as substring but if the first index is larger, it returns an empty stirng ""
let phoneNumber = "602612125";
phoneNumber.slice(3, 7);

// replace replaces a part of the string you specify with something else
let message = "I am learning FORTRAN";
message.replace("FORTRAN", "JavaScript");

//toLowerCase takes your string and replaces all capital letters with lowercase letters
let username = "Rene Napravil";
username.toLowerCase();

// Objects = complex type of data (includes different types of data in it), use {object};

const customer = {
    name: "Laura",
    address: "123 ABC Road",
    city: "Prague",
    country: "Czechia",
    zipcode: "12306",
    isInLoyaltyClub: true,
};

// value (=properties) can be any combination of a data type
// objects are commonly declared as constants = object is unchangable but the values inside can be changed
// you can access any property of an object using object.property and JS returns the value

customer.name

//Array = list of items (=elements), to access an element you use its index
// [] + ,

const favouriteCities = [
    "Rome",
    "Prague",
    "London",
    "Paris",
];

// access Prague
favouriteCities[1];

//Scope = where you can access a variable
//Global = anywhere
// Function scope = anywhere in the function where it was declared
// Block scoped = declared anywhere in the block within {}
