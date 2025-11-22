// Write program: UserClass that has a constructor that
//     initializes instance variable name and mobile number.
//     Create a subclass UserInfo that will have user address
//     variable and it also being initialized through constructor
//     call. Print users name, mobile number and address in

// import os = require("os")

// //     userDetails method. Test your code.
// class UserClass {

//     name: string
//     mobileNumber: number
//     constructor(name: string, mobileNumber: number) {
//         this.name = name

//         this.mobileNumber = mobileNumber
//     }

// }
// class UserInfo extends UserClass {

//     useraddress: string
//     constructor(name: string, mobileNumber: number, useraddress: string) {
//         super(name, mobileNumber)
//         this.useraddress = useraddress
//     }
//     userDetails = (): void =>
//         console.log(`those are the info about the user--->\nname=${this.name}\n${this.mobileNumber}\n${this.useraddress}`)


// }
// let ud = new UserInfo(`ELio  `, 76552346, `Aintoura el maten`)
// ud.userDetails()


// Create a class CreditCard and define two variables, balance and interest.
//     ▪ Create an instance method that will calculate the interest based on the given balance.
//     ▪ Create 2 subclasses: Visa and AX. In AX class override the method calculate interest.
//     ▪ Call the method by creating an object of each of the three classes.

// class CreditCard {
//     balance!: number; interest!: number;

//     intrestcalculator(balance: number, interest: number): void {
//         this.balance = balance;
//         this.interest = interest



//         const interestAmount = this.balance * this.interest / 100;
//         console.log(
//             `To calculate the interest based on the current balance CreditCard method: ` +
//             `Balance × Interest Rate / 100 = ${this.balance} × ${this.interest} / 100 = ${interestAmount}`
//         );

//     }

//     student() {

//         console.log(`the student of the parents as neotech student is being called`)

//     }






// }
// class Visa extends CreditCard {
//     intrestcalculator(balance: number, interest: number): void {

//         const interestAmount = balance * interest / 100;
//         console.log(
//             `To calculate the interest based on the current balance visa method: ` +
//             `Balance × Interest Rate / 100 = ${balance} × ${interest} / 100 = ${interestAmount}`
//         );



//     }
//     student() {

//         console.log(`the student of the child class as college student is being called`)

//     }

// }
// class AX extends CreditCard {

//     intrestcalculator(balance: number, interest: number): void {

//         const interestAmount = balance * interest / 100;
//         console.log(
//             `To calculate the interest based on the current balance in the ax method: ` +
//             `Balance × Interest Rate / 100 = ${balance} × ${interest} / 100 = ${interestAmount}`
//         );



//     }
//     student() {

//         console.log(`the student of the child class as SchoolStudent is being called`)

//     }


// }
// let cc = new CreditCard()
// let visa = new Visa()
// let ax = new AX()

// cc.student()
// visa.student()
// ax.student()


// ▪ Create a Class Computer that will have 4 subclasses as Apple, Lenovo, HP, Dell.
//     ▪ Define some common behavior (methods) and some fields in the parent class, and override some of the methods in the child classes.
//     ▪ Define some methods specific to the child classes.
//     ▪ Create objects of the child classes and store them in an array.
//     ▪ Loop through each object and execute available methods.

class Computer {
    starting() {
        console.log(`The computer is now poweron`)
    }



}

class Apple extends Computer {
    starting() {
        console.log(`The Apple is now poweron`)
    }



}

class Lenovo extends Computer {
    starting() {
        console.log(`The Lenovo is now poweron`)
    }



}
let cc = new Computer()
let a = new Apple()
let l = new Lenovo()

// cc.starting()
// a.starting()
// l.starting()

let computers: Computer[] = [cc, a, l]
computers.forEach((comp) => {
    comp.starting();
});