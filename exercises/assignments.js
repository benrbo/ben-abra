// Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

const calcAllNums = (...numbers) => {
    let sum = 0;
    for (let number of numbers) {
       sum += number;
    }

    return sum;
}

const calcAllNums2 = (...numbers) => numbers.reduce((a,b) => a+b)
console.log(calcAllNums2(1,2,3,4))


// Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.
const addOnlyNums = (...items) => {
    let sum = 0;
    for (let item of items) {
        if (typeof item === "number") {
            sum += item 
        }
    }

    return sum;
}
console.log(addOnlyNums(1,2,"bb","5",3,4));
// Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).
const combineTwoArrays = (arr1, arr2) => {
    return [...arr1,...arr2];
}

console.log(combineTwoArrays([1,2,3],[4,5,6]));

// Write a function called onlyUniques that can take in any number of arguments, and returns an array of only the unique arguments.
const onlyUniques = (...items) => {
    let newSet = new Set();
    for (let item of items) {
        newSet.add(item);
    }

    return [...newSet];
}

console.log(onlyUniques(1,2,3,4,4,4,4,4,4,"1","1","abc","abc"));

const onlyUniques2 = (...items) => {
    let arr=[];
    for (let [idx, item] of items.entries()) {
        let found = false;
        for (let [idx2, item2] of items.entries()) {
            if (idx != idx2 && item === item2) {
                found = true;
                break;
            }
        }
        if (!found) {
            arr.push(item);
        }
    }
    return arr;
}

console.log(onlyUniques2(1,5,3,7,1,5,1,1,1,1,1,1 ));

// Write a function called combineAllArrays that takes in any number of arrays as arguments and combines all of them into one array.

const combineAllArrays = (...arrs) => {
    let newArr = [];
    for (let arr of arrs) {
        newArr = [...newArr, ...arr];
    }

    return newArr;
}

console.log(combineAllArrays([1,2,3],[4,5,6],[1,1,1]))
