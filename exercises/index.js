// const arr = [2,3,4];
// console.log(arr);


// destructing
// // const first=arr[0], second=arr[1], third=arr[2];
// let [first, ,third] = arr;

// console.log(first, second, third);

// let x = 5;
// let y = 6;

// switch between items
// [x, y] = [y, x];
// console.log(x,y);

// nested arrays
const nestArr = [1,2,[3,4]];

const [first, second, [third, forth]] = nestArr;

console.log(first, second, third,forth)

// default values
const newArr = [1, 6]

const [aa, bb=5] = newArr;
console.log(aa, bb)

const obj = {name : "Elad Zucker", age : 22};
const {name, age} = obj;

console.log(name, age);

// const fullName = obj.name;
// const myAge = obj.age;

const {name: fullName ="none", age: myAge} = obj;


console.log(obj);
console.log(fullName, myAge);


let aaa = 0;
let bbb = 0;

({ name :aaa, age: bbb } = obj);

console.log(aaa, bbb);

