// Map in ES6
// const muaz = new Map();
// muaz.set('fullname', 'Muaz Muhammad')
// muaz.get('fullname');
// muaz.has('fullname');
// muaz.clear();
// const person = new Map();
// person.set('name', 'Muaz Muhammad');
// person.set('job', 'Teacher');
// person.set('color', 'blue');
// person.set('language', 'javascript');
// person.set('device', 'Dell');

// console.log(person);
// console.log(person.size);

// person.forEach((value, key) => console.log(`key is: ${key} and the value is : ${value}`));

// for(let [key, value] of person.entries()) {
//     console.log(`key is: ${key} and the value is : ${value}`);
// }

//Class & Inheritance in ES6
var Child5 = function (name, dob){
    this.name = name;
    this.dob = dob;
 
}
var muaz = new Child5('Muaz Muhammad', 2000);

console.log(muaz.name);

Child5.prototype.currentAge = function(){
    console.log(this.name + ' is ' + (2025 - this.dob) + ' years old');

}
muaz.currentAge();

class  Child6 {
    constructor(name, dob){
        this.name = name;
        this.dob = dob;
    }
    currentAge(){
         console.log(`${this.name} is ${2025 - this.dob}  years old`);
    }
}
let muaz6 = new Child6 ('Muaz Muhammad', 2000);
console.log(muaz6.dob);
muaz6.currentAge();