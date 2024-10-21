let someVar = "chris"

let fruits = ["cherry", "grape", `${someVar} ate an apple`, "lemon", "tomato"];

// console log the whole list
console.log("fruits: ", fruits);

// console log the first item
console.log("first item: ", fruits[0]);

// console log the next item
console.log("second item: ", fruits[1]);

// console log the last item
console.log("the last item of the array: ", fruits[fruits.length - 1]);

// modify the array
fruits[2] = ["chris", "ate", "a", "banana"];
console.log("modified array: ", fruits);

// adds an item from the end of the array
fruits.push("kiwi");
console.log("updated push list", fruits)

// removes an item from the end of the array
fruits.pop();
console.log("updated pop list", fruits)

// removes an item from the beginning of the array
fruits.shift();
console.log("updated shift list", fruits)

// adds an item to the beginning of the array
fruits.unshift("cherry");
console.log("updated unshift list", fruits)

// add "banana" to the middle of the array
fruits.splice(Math.floor(fruits.length / 2), 0, "banana");
console.log("updated splice list", fruits)

// get the indexOf "lemon"
console.log("index of lemon: ", fruits.indexOf("watermelon"));

let numbers = [11, 2, 3, 14, 5, 6, 27, 8, 89, 10];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// const sortedList = numbers.sort((a, b) => a - b);

// console.log("sorted numbers: ", sortedList);

// sorted numbers with a for loop
// bubble sort
// outer loop - loops through the original array
for (let i = 0; i < numbers.length; i++) {
    // inner loop - loops through the array and compares the values
    for (let j = 0; j < numbers.length; j++) {
        // if the value of the number [j] is greater than the value of the number [j + 1]
        if (numbers[j] > numbers[j + 1]) {
            // temporary value to store the value of the number being swapped
            let tempVal = numbers[j];
            // swap the values
            numbers[j] = numbers[j + 1];
            // set the value of the number being swapped to the value of the temporary value
            numbers[j + 1] = tempVal;
        }
    }
}

console.log("sorted numbers with a for loop: ", numbers);

