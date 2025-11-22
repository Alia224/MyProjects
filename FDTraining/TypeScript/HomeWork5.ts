// let arr:string[]=[`elio`,`azar`,`tanios`]

import readline = require("readline")



// let upperuser=arr.map(n=>`the arr with upper case will give ${n.toUpperCase()}`);

// console.log(upperuser)
// let arrlengh=arr.map(n=>n.length);
// console.log(arrlengh)


// Create a Class "Phone". Create 3 Objects of it: 
// iPhone, Android, Nokia with specific  attributes and behaviors


// class Phone {
//     brand: string
//     version: string
//     price?

//     constructor(brand: string, version: string, price?: number) {

//         this.brand = brand
//         this.version = version
//         this.price = price
//     }

//     call(number: string) {
//         console.log(`The ${this.brand} with the version ${this.version} is ringing with the number ${number}`)



//     }
//     Rington(ring: string) {
//         console.log(`I bought the ${this.brand} with the version ${this.version} for the ${ring}`)

//     }





// }

// let iphone = new Phone(`Iphone`, `2015`, 500)

// iphone.Rington(`Apple ringtone`)

// iphone.call(`76 55 23 46`)


// console.log(`                 `)
// let Android = new Phone(`samsung`, `2020`, 100)

// Android.Rington(`android ringtone`)

// Android.call(`70 77 78 28`)

// console.log(`        `)


// class Dog {
//     breed: string
//     age: number
//     country: string

//     constructor(breed: string, age: number, country: string) {

//         this.breed = breed
//         this.age = age
//         this.country = country


//     }

//     Walking() {
//         console.log(`The ${this.breed} with the age  ${this.age} is walking down the road his owner got it from ${this.country}`)


//     }
//     Barking(sound: string): string {
//         let voice = `The ${this.breed} that came from ${this.country} has a sound like a ${sound}`
//         return voice;
//     }





// }

// let husky = new Dog(`Husky`, 15, "Russia")
// let labrador = new Dog(`labrador`, 5, "England")
// let Bulldog = new Dog(`Bulldog`, 1, "USA")
// console.log(husky.Barking("Bear"))
// husky.Walking();
// console.log(`   `)
// console.log(labrador.Barking("Elephant"))
// labrador.Walking();

// console.log(`   `)
// console.log(Bulldog.Barking("Lion"))
// Bulldog.Walking();

// Create a class Student that will have a method getGrade.
// Your method should accept the score of a student and return a grade:
// 	score > 90 - A
// 	score > 80 - B
// 	score > 70 - C
// 	score > 50 - D
// 	anything else - F

// class Student {

//     GetGrade(score: number): string {
//         let grade: string
//         if (score > 90) {
//             return `Your grade Mr is A`
//         } else if (score > 80) {
//             return `Your grade Mr is B`
//         } else if (score > 70) {
//             return `Your grade Mr is C`
//         }
//         else if (score > 50) {
//             return `Your grade Mr is D`
//         } else { return `Your grade Mr is F` }

//     }

// } let Elio = new Student()
// console.log(Elio.GetGrade(60))
//     Create a String that will hold a sentence. Write a program to get a new String without any spaces.

// let sentence:string=`Hi ELio How are you`

// let withoutSpace=sentence.replaceAll(` `,``);
// console.log(withoutSpace)

//  Write a program that reads two parent's first names and if they expecting boy or girl?
//     Based on the input suggests a name for a baby:
//     If it is a boy get half from dad and half from mom.
//     If it is a girl get half from mom and half from dad.

//         Example Output:
//             Mom's first name? Mary
//             Dad's first name? Daniel
//             Boy or Girl? boy
//             Suggested baby name: DANRY
//         Example Output:
//             Mom's first name? Mary
//             Dad's first name? Daniel
//             Boy or Girl? girl
//             Suggested baby name: MAIEL


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("What is the dad name ", (answer: string) => {
    var dadName = answer.trim();
    rl.question("What is the mom name ", (ans: string) => {
        var momName = ans.trim();

        rl.question("is it a boy or a girl ", (gender: string) => {
            var genderChild = gender.trim();
            if (genderChild.toLowerCase() == "boy") {
                console.log(`Suggest the babies name ${dadName.substring(0, 2)}${momName.substring(0, 2)}`)
            } else if (genderChild.toLowerCase() == "girl") {

                console.log(`Suggest the babies name ${dadName.substring(2)}${momName.substring(2)}`)

            } else {
                console.log("he is gays")
            }
            rl.close()


        });


    });


});




