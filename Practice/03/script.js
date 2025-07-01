// Map in ES6
const muaz = new Map();
muaz.set('fullname', 'Muaz Muhammad')
// muaz.get('fullname');
// muaz.has('fullname');
// muaz.clear();
const person = new Map();
person.set('name', 'Muaz Muhammad');
person.set('job', 'Teacher');
person.set('color', 'blue');
person.set('language', 'javascript');
person.set('device', 'Dell');

console.log(person);
console.log(person.size);

person.forEach((value, key) => console.log(`key is: ${key} and the value is : ${value}`));

for(let [key, value] of person.entries()) {
    console.log(`key is: ${key} and the value is : ${value}`);
}

