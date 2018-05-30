const PriorityQueue = require('../../Others/Queue/PriorityQueue');
let prioridade = new PriorityQueue('min');

console.log(prioridade.isEmpty());
console.log(prioridade.size());
console.log(prioridade.get());
prioridade.enqueue('Filipe', 4);
prioridade.enqueue('Iolanda', 8);
prioridade.enqueue('Rodrigo', 4);
prioridade.enqueue('Hercules', 8);
prioridade.enqueue("Vo");
// console.log(prioridade.get());
prioridade.dequeue();
console.log(prioridade.get());
console.log(prioridade.size());

