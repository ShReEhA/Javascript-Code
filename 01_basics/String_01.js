const name = "Shree"
const repocount = 10
// console.log(name + repocount + "value");

// console.log(`Hello my name is ${name} and my repocount is ${repocount}`); // STring interpolation in js 

const gameName = new String(`S-hreehari`) // String: `Shreehari`  o/p
// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(-2,3)
// console.log(newString);

const slice1 = gameName.slice(-8,5)
// console.log(slice1)

const oneString = "  Sherredhd   "
console.log(oneString)

console.log(oneString.trim());

const url = "https://shreesocial.com/shree%20shree"

console.log(url.replace(url.replace("%20", "--")))

console.log(gameName.split('-'))
