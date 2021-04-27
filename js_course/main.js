//let ,const to initialize the variables
let score = 90 ;
score = 10
console.log(score)

const mark = 30;
//mark = 20 reassigning cannot be done for constant variable
console.log(mark)

//data types- String, Numbers, Boolen, null, undefined.
 const mname = 'Bhavyatha'; //String
 const age = 21; // Number
 const rate = 4.5; //Number even if float value
 const isCool = true ;//Boolean 
 const x = null; //null
 const y = undefined; //undefined
 let z;

 // to find type of variable
console.log(typeof age)

// Concatenation sting and variable
console.log('My name is '+ mname + " and I am " + age)
// template string
console.log(`My name is ${mname} and I am ${age}`)

// find length of string in js
console.log(mname.length)
// substring
//uppercase
console.log(mname.substring(0,2).toUpperCase())

//split
const s = 'My Name is Bhavyatha';
console.log(s.split(' '));

// Arrays- can take variables of different data types
const fruits = ['Apple','Banana','orange']
//to add item at the end
fruits.push('mango')
// to add item at the begining
fruits.unshift('grapes')
console.log(fruits)
// to remove item
fruits.pop()
console.log(fruits)
console.log(fruits[1])

//object
const person = {
    firstname : 'Bhavyatha',
    lastname : 'Shetty',
    age : 21,
    hobbies : ["Art","Music"],
    address : {
        street : '1-88/9 main st',
        city : 'mangalore',
        state : 'Karnataka'
    }
}
console.log(person)
//add property to object element
person.email = 'bhavya@gmail.com';
console.log(person)

// Array of object
const todos = [
    {
        id : 1,
        text : 'pay electicity bill',
        iscompleted : true
    },
    {
        id : 2,
        text : 'Meeting',
        iscompleted : true
    },
    {
        id : 1,
        text : 'Appoitment',
        iscompleted : false
    },

]
console.log(todos)
// jsonify the above object content
const todoJSON = JSON.stringify(todos)
console.log(todoJSON)

