// CONTROLLING FLOW
// Conditional statements allow you to write code that performs various action based on various conditions

//if; if a statement coffeMachineIsOff is true than use function turnOnCoffeeMachine

if (coffeMachineIsOff) {
    turnOnCoffeMachine();
}

// if else; based on the country use either fahrenheit or celsius

if (country === "United States" || country === "Liberia") {
    temperature = temperature + "F";
}   else {
    temperature = (temperature - 32) * 5 / 9 + "C";
}

// multiple if else

let pet = "parrot";
if (pet === "dog") {
    greetings = "Who's a good boy!";
}   else if (pet === "cat") {
    greetings = "Good Kitty!";
}   else if (pet === "parrot") {
    greetings = "Want a cracker?";
}   else {
    greetings = "Hi!";
}

// Ternary operator (? and :), shortens the if else but can be used only to switch between two choices

const dt = new Date();
const hours = dt.getHours();
let msg;
msg = hours < 12 ? ("Good morning!") : ("Welcome!");
console.log(msg);

// Switch statement decides which statement to run based on the result of a single expression, each outcome = case

const dt = new Date();
const month = dt.getMonth();
let msg;
switch(month) {
    case 0:
        msg = "January 4 is National Spaghetti Day!";
        break;
    case 1:
        msg = "February is National Pizza Day!"
        break;
    case 2:
        msg = "March is National Motorcycle day";
        break;
    default:
        msg = "There is no holidays this month.";
}