// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question("What is your height in cm:", (answer: String) => {
//     var height = Number(answer.trim())


//     if (isNaN(height)) {
//         console.log(`Invalid input`)

//     } else if (height < 60) {
//         console.log("You're short");
//     } else if (height >= 60 && height <= 72) {
//         console.log("You're medium height");
//     } else if (height > 72) {
//         console.log("You're tall");

//     }

//     rl.close
// });

// . Write a program that will ask for the day (a number from 1-7). Print whether it is a weekend or weekday.
// 	If any day from 1-5 → output "It is a weekday"
// 	Any day from 6-7 → output "It is a weekend",
// 	Any other day → output "Invalid day"

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// rl.question("Which day is today ", (answer: string) => {
//     var day = Number(answer.trim())

//     if (isNaN(day)) {
//         console.log(`invalid input`)

//     } else if (day >= 1 && day <= 5) {
//         console.log(`its a weekday`)

//     } else if (day >= 6 && day <= 7) {
//         console.log(`its a weekend`)

//     } else {
//         console.log(`invalid day`)

//     }

//     rl.close();




// });

// Allow user to enter grade and then provide explanation:
// A-Excellent, B-Good, C-Average, D-Bad, any other grade --> Not Acceptable.
// At the end your program should print which grade was entered by the user with explanation.

// const readline = require("readline")

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout

// })

// rl.question("What is the grade that you took in your Test ", (anwser: string) => {
//     var grade = (anwser.trim().toUpperCase());

//     if (grade == "A") {
//         console.log(`Exellent your Grade is --->${grade}`)

//     } else if (grade == "B") {
//         console.log(`Good your Grade is --->${grade}`)
//     } else if (grade == "C") {
//         console.log(`Average your Grade is --->${grade}`)
//     } else if (grade == "D") {
//         console.log(`Bad your Grade is --->${grade}`)
//     } else { console.log(`not acceptable`) }

//     rl.close();
// })


// Write a TypeScript program that:
// Uses a while loop
// Calculates the sum of all even numbers between 0 and 10.
// Prints the result to the console.
// let i = 0; // counter
// let sum = 0;
// while (i <= 10) { // condition
//     if (i % 2 == 0) {
//         console.log(`${i}`)
//         sum += i;
//     }

//     i++

// } console.log(`${sum}`)

// Write a program that asks user to enter his/her username and password until user enters them correctly.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define the correct credentials
const CORRECT_USERNAME = "admin";
const CORRECT_PASSWORD = "1234";

// Function to ask for username and password
function askCredentials() {
    rl.question("Enter your username: ", (username: string) => {
        rl.question("Enter your password: ", (password: string) => {
            if (username.trim() === CORRECT_USERNAME && password.trim() === CORRECT_PASSWORD) {
                console.log("Login successful! ✅");
                rl.close();
            } else {
                console.log("Incorrect username or password. Try again.\n");
                askCredentials(); // Repeat until correct
            }
        });
    });
}

askCredentials();