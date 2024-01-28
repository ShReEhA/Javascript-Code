// primitive dataType
//7 categories: String, Number, Boolean, null, undefine, symbol, BigInt
const score = 100
const scoreValue = 100.3
const noscore = null

const id= Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)

//ReferenceType (Non-primitive)
//Array, Objects, Functions 


const name = ["Shaktiman", "Rahul", "Seema"];

let myObj= {
    "age": 24,
    "syllabus": "science"
}
// console.log(typeof noscore)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(primitive) & Heap(Non-Priitive) 

let myYoutube = "shreehari.com"
let nameYoutube = myYoutube
// console.log(nameYoutube)

let anotherYoutube= "not Same"
// console.log(anotherYoutube)


let userOne = {
    name: "Sreehari",
    Email: "Shree@gmail.com"
}
let userTwo = userOne
    userTwo.Email= "Hitesh@gmail.com"

    console.log(userOne.Email)
    console.log(userTwo.Email)