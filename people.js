const createName = require("./names.js");
console.log(createName("Simone", "Burrai"));
const hobbiesList = require("./hobbies.js");
console.log(hobbiesList("calcio", "nuoto", "football"));

const person = () => {
    personInfo = {
        fullName:  createName("Simone", "Burrai"),
        hobbies: hobbiesList("basket", "skate", "guitar")
    }
    return personInfo;
}

console.log(person());