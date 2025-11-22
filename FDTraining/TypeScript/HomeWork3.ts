//  Print 5 times this statement: "I love Neotech"

// 2. Write a program that asks user to enter his/her username and password until user enters them correctly.

// 3. Print numbers from 1 to 50 except those that are divisible by 3.

// 4. Create a program that will be asking user to apply for a credit card 10 times.
// As soon you get an "yes" from a user program should stop asking.


// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// // for (let i = 0; i < 5; i++) {

// //     console.log(`I love Neotech`)

// // }

// // function AskName() {
// //     rl.question("insert your name ", (answer: string) => {
// //         var name = answer.trim()


// //         rl.question("insert your lastname ", (answer: string) => {
// //             var lastname = answer.trim()


// //             if (name == "Elio" && lastname == "Azar") {

// //                 console.log("Welcome")
// //                 rl.close()



// //             } else {
// //                 console.log(`Re try`)
// //                 AskName()

// //             }

// //         })

// //     })
// // }

// // AskName()
// // for (let i = 0; i <= 50; i++) {
// //     let a = i;
// //     if (a % 3 === 0) {
// //         console.log(`${a}`)
// //     } else {
// //         // console.log(`${a}`)
// //     }



// // }
// let attempts = 0;           // counter outside
// const maxAttempts = 10;
// function CreditCard() {
//     if (attempts >= maxAttempts) {
//         console.log(`You have reached your max attempts of ${attempts}`)
//         rl.close()
//         return;

//     }
//     rl.question("Do you want to apply for a credit card ", (answer: string) => {
//         let answ = answer.trim()


//         if (answ == "yes") {
//             console.log(`Welcome`)
//             rl.close()
//         } else {
//             console.log(`Re try`)
//             attempts++
//             console.log(`Retry you still have (${attempts} of /${maxAttempts})`);
//             CreditCard(); // ask againSS


//         }

//     }

//     )
// }
// CreditCard()
// Ask the user to enter an integer and build the following pattern:
// Hint: Use scanner, if user entered number 5, there should be 5 rows.
// In the first row, 0 spaces, (2 * 5) - 1 stars
// In the second row, 1 spaces, (2 * 4) - 1 stars
// In the third row, 2 spaces, (2 * 3) - 1 stars
// In the fourth row, 3 spaces, (2 * 2) - 1 stars
// In the fifth row, 4 spaces, (2 * 1) - 1 stars

// *********
//  *******
//   *****
//    ***
//     *

// let n = 5;

// for (let row = 0; row < n; row++) {
//     console.log(" ".repeat(row) + "*".repeat((2 * (n - row)) - 1));
// }
// Create an array of cars and store 6 elements into it. Print all values from the array.

// let arr: string[] = []
// arr.push("Toyota")
// arr.push("mercedez")
// arr.push("kol jawa")
// arr.push("BMW")
// arr.push("AMG")
// arr.push("MEgan")
// for (let [index, value] of arr.entries()) {
//     console.log(index)
//     console.log(value)

// }
// for (let index in arr) {
//     console.log(index)

// }
// for (let value of arr) {
//     console.log(value)
// }
// // for (let index of arr) {
// //     console.log(`${index}`)
// //  }
// let arr: number[] = []
// arr.push(3)
// arr.push(5)
// arr.push(7)
// arr.push(10)
// arr.push(5, 11, 98, 65)
// let num: number = 0
// for (let value of arr) {

//     let n: number
//     n = value

//     num += n


// // } console.log(num)
// Create an array of countries. While retrieving all values from an array print capital for each country.