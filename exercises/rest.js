

const arr = [1,2,3,4,5];

const [a,b,...others] = arr;

console.log(a,b,others);


const testFunction = (...params) => {
    for (let param of params) {
        console.log(param)
    }
    
    for (let i=0;i<params.length;i++) {
       console.log(params[i]);
    }
}

testFunction(1,2,"test", 3.3, 1)