const { people, ages } = require('./people');

console.log(ages, people);
// console.log(people);

const os = require('os');

console.log(os.platform(), os.homedir());