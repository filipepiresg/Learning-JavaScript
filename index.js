let Conversor = require('./Problemas/Stack/Conversor.js');
let decimal = -28, binary ="1100100", base =2, signed=true, abs = Math.abs(decimal);

console.log(`${decimal}(10) -> ${Conversor.toBin(decimal)}(2)`);
console.log(`signed(${signed}): ${binary}(2) -> ${Conversor.toDec(binary, signed)}(10)`);
console.log(Conversor.toDec('1100100', signed));
console.log(Conversor.converterBase(100, 2));
console.log(`conversor: ${abs}(10) -> ${Conversor.converterBase(abs, base)}(${base})`);
