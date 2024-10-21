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