let Conversor = require('./Stack/Conversor.js');

let decimal = 100, limit = 8, binary ="110100000";
let conversor = Conversor;

console.log(conversor.decToBin(decimal, limit)); // 20 em 6 bits = 010100
// console.log(conversor.binToDec(binary)); // 52
