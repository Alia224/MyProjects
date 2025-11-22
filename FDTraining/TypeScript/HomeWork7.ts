// Write a Java program called Car. Specify features and behaviours of the Car class.
// Create SportsCar and FamilyCar subclasses of the Car class with their own features and behaviours.
// Next, create a LuxurySportsCar that will inherit the SportsCar and also will have its own features and behaviours.
// Create objects from each class and test them.

// class Car {
//     Model: string
//     Year: number
//     constructor(Model: string, Year: number) {
//         this.Model = Model
//         this.Year = Year

//     }

//     details = (): void => console.log(`The model of the car is ${this.Model} and its made in the year ${this.Year}`)
//     engineStart = (): void => console.log(`the engine of the ${this.Model} has started`)
//     engineStops = (): void => console.log(`the engine of the ${this.Model} has started`)
// }
// class FamilyCar extends Car {
//     size = (size: string) => {
//         if (size.toLowerCase() == "van") {
//             console.log(`This car is made for a family of 10`)

//         } else if (size.toLowerCase() == "minivan") {
//             console.log(`This car is made for a family of 5`)

//         }


//     }
//     speed = (): void => {
//         console.log(`The family car that is ${this.Model} can only go to 50 km per hour`)

//     }
// }
// class SportsCar extends Car {

//     speed = (): void => {
//         console.log(`The sportcar that is ${this.Model} can only go to 150 km per hour`)
//     }



// }
// let scar = new SportsCar(`Ferarri`, 2015)
// scar.details()
// scar.engineStart()
// scar.engineStops()
// scar.speed()

// let fcar = new FamilyCar(`peugot`, 2000)
// console.log(fcar.size(`van`))
// fcar.details()
// fcar.engineStart()
// fcar.engineStops()
// fcar.speed()

// class Programming {
//     input?
//     constructor(input?: string) {
//         this.input = input

//         if (input == null) {

//             console.log(`I love programing`)
//         }
//         else if (input !== null) {
//             console.log(`I love ${input}`)

//         }
//     }


// }

// let pro = new Programming(`java`)

// Create a class with 3 overloaded static methods.
//     Then call each overloaded methods with specific arguments and observe the results.

// class stud {
// static    study(input: string | number): void {
//         if (typeof input == "number") {

//             console.log(`the paramter passed is number -->${input}`)


//         } else { console.log(`the parameter passed is a string ${input}`) }


//     }




// }

// stud.study(7)
// stud.study(`elio`)


// // function greet(name: string): string;
// // function greet(age: number): string; 

//  function greet(value: string | number): string {
//   if (typeof value === "string") {
//     return `Hello, ${value}`;
//   } else {
//     return `You are ${value} years old`;
//   }
// }
class MyClass {
    // Overload signatures (all private)
    private doSomething(x: number): void;
    private doSomething(x: string): void;
    private doSomething(x: boolean): void;

    // Single implementation
    private doSomething(x: number | string | boolean): void {
        if (typeof x === "number") {
            console.log(`Number passed: ${x}`);
        } else if (typeof x === "string") {
            console.log(`String passed: ${x}`);
        } else {
            console.log(`Boolean passed: ${x}`);
        }
    }

    // Public method to call the private overloaded method
    public test(): void {
        this.doSomething(42);      // Number passed: 42
        this.doSomething("Elio");  // String passed: Elio
        this.doSomething(true);    // Boolean passed: true
    }
}

// Usage
const obj = new MyClass();
obj.test();