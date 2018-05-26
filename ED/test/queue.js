const Queue = require('./../src/Queue.js');

let fila = new Queue;
console.log(fila.isEmpty());
fila.enqueue(1);
console.log(fila.isEmpty());
console.log(fila.get());

fila.enqueue([2,4,5]);
console.log(fila.get());
console.log(fila.front());

fila.clear();
console.log(fila.get());

fila.enqueue(10);
console.log(fila.get());
console.log(fila.dequeue());
fila.enqueue(8);
console.log(fila.get());
fila.enqueue([9,11,12]);
console.log(fila.get());