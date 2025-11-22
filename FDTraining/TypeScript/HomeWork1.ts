// Create a TypeScript file called DeclareVariables.ts.
// Declare variables for all primitive types available in TS:
// number (covers int, float, double, etc.)
// bigint (for very large integers, like long)
// string (instead of Java char)
// boolean
// undefined
// null
// symbol
// Print each variable on a separate line.
// Try assigning a value that’s not valid to see TS error checking

var num: number = 5
let long: bigint = 656556565656565n;
let name: string = "Elio"
let testing: boolean = true
let IdontKnow: undefined
let Point: null

console.log(`${num}\n${long}\n${name}\n${testing}\n${IdontKnow}`)
console.log("                                        \n\n")

// Create a Java program and name it VariableValues
// In your program create variables to store all different types of primitive data.
// Print the value of each variable.
// Update value of each variable.
// Print the value of each variable after updating.
num = 10
long = 656588756565n;
name = "George "
testing = false

console.log(`${num}\n${long}\n${name}\n${testing}\n${IdontKnow}`)
// Use the scale: 1 mile = 1.609344 kilometers.
// Create variables to store values in miles and kilometers.
// Write code to convert:
// miles → kilometers
// kilometers → miles
// Test your program using the values:
// 10 miles
// 16.09344 kilometers
let scale: number = 1.609344
let mile: number = 18


console.log(`${mile} mile would be ${scale * mile} in kilometers`)

let kilometers: number = mile * scale

console.log(`${kilometers} kilometers is ${kilometers / scale} in miles`)

//  Create a Java program and name it DoubleComparison.
// Declare 2 double values and if the value of first the variable is higher then the second,
// print “Double value __ is larger than __ .”
// Otherwise print...
console.log("                                        \n\n")

let a: number = 15
let b: number = 18

if (a > b) {

    console.log(`a value ${a} is larger than b ${b} .`)

} else if (a < b) {
    console.log(`b value ${b} is larger than a ${a} .`)



}
// Create a Java program and name it TemperatureCheck.
// Create a variable to store temperature.
// Your program should check if the temperature is below 32
// If the temperature is below 32
//     then it should print "Water will freeze with temperature __",
//     otherwise should print "Water will NOT freeze with temperature __".
var temperature: number = 31.5
if (temperature > 32) {

    console.log(`Water will NOT freeze with temperature ${temperature}`)
} else if (temperature < 32) {
    console.log(`water will freeze with temperature  ${temperature}`)
}

// Write a java program to check if a patient has allergies.
//     If the patient does not have allergies print "You’re healthy!".
//     If the patient has allergies, check if it is a peanut allergy, lactose allergy, bee allergy or seafood allergy
//     and print a statement telling the patient
//     "Don’t eat ___". (fill the line with the food names – peanut, seafood etc.)

var HaveAllergies: boolean = true
var allergiename: string = "lactose"
if (HaveAllergies) {
    if (allergiename == "peanut") {
        console.log(`Don’t eat ${allergiename} you have ${allergiename} allergie`)
    }
    else if (allergiename == "lactose") { console.log(`Don’t eat ${allergiename} you have ${allergiename} allergie`) }

} else if (HaveAllergies == false) {
    console.log(`You’re healthy!`)}

