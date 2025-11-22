// Create a ArrayList that will store 5 names into it.
// ▪ Find out whether the given ArrayList is empty or not?
// ▪ Check whether the specific name is present in an ArrayList or not?
// ▪ Find the size of your ArrayList and print all values from the ArrayList

// let arr: string[] = []
// arr.push(`Elio`)
// arr.push(`paul`)
// arr.push(`Dani`)
// arr.push(`charbel`)
// arr.push(`abdo`)
// if (arr.length === 0) {
//     console.log(`The array is empy`)


// } else { console.log(`the array is not empty`) }

// let nameToFind = "abdo"
// if (arr.map(v => v.toLowerCase()).includes(nameToFind)) {
//     console.log(`The specific name "${nameToFind}" is in the array at index ${arr.findIndex(v => v.toLowerCase() === nameToFind)}`)
// } else {
//     console.log(`The specific name "${nameToFind}" is not in the array`)
// }
// console.log(`           `)

// console.log(`the index length of the array is ${arr.length}`)
// for (let value of arr) {
//     console.log(value)
// }

//  Create an arrayList of drinks. If any drink has letter "a" or "e" replace it with water. 
// let arr: string[] = []
// arr.push(`wiski`)
// arr.push(`vodka`)
// arr.push(`gin`)
// arr.push(`martini`)
// arr.push(`sambouka`)
// let wa = arr.map(value => value.toLowerCase().includes(`a`) || value.toLowerCase().includes(`e`) ? `water` : value)
// console.log(wa)
// Create a map of car models that you have in your garage and for each model the number of car you have.
// So the Key is the model and the value is the number of cars. Use LinkedHashMap.
// For example:
// "BMW" -> 2
// "Mercedes" -> 3
// "Audi" -> 3
// "Ferrari" -> 1

// - Check how many entries you have.
// - Update the number of Audis to 5.
// - Add a new model with any number of cars.
// - Check how many Ferraris you have.
// - Check if you have Honda in your map.
// - Remove Mercedes from the map.
// - Get all models from the map. (use keySet() method)

// Note: After each step print the map.
let garage = new Map<string, number>([[`BMW`, 2], [`Mercedes`, 5], [`Audi`, 6], [`Honda`, 3], [`Ferrari`, 5]])
console.log(`we have ${garage.size} entries :`)
console.log([...garage.entries()])

for (let [key, value] of garage) {
    if (key.toLowerCase().match(`audi`)) {
        garage.set(key, 5)

    }
}
console.log([...garage.entries()])
garage.set(`Kia`, 10)
for (let [key, value] of garage) {
    if (key.toLowerCase().match(`ferrari`)) {
        console.log(`we have ` + garage.get(key) + ` ${key}`)


    }
    if (key.toLowerCase().match(`honda`)) {
        console.log(`we have ${value}` + ` ${key}`)


    }


}
if (garage.delete(`Mercedes`)) {
    console.log(`The key Mercedes and its value has been deleted succseffly`)
} else { console.log(`there has been a problem the Mercedes isnt deleted`) }


console.log([...garage.entries()])
for (let model of garage.keys()) {
    console.log(model)
}
