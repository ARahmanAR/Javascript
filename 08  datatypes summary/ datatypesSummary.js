// * Primitive

// 7 type : String, Number, Boolean, null, undefiend, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const BigNumber = 3455305677899n;
// console.log(BigNumber);



// * Reference (Non primitve)

// Array, Objects, Functions


const arr = [1, 2, 3]
let obj = {
    name : "Abdur Rahman",
    Age: 18,
}

const myFunc = function(){
    console.log("This a function.")
}

console.log(typeof BigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunc);
