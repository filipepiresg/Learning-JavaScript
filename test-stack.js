const Stack = require('./ED/Stack.js');

let pilha = new Stack();
console.log(pilha.isEmpty());
pilha.push(1);
console.log(pilha.isEmpty());
console.log(pilha.getStack());

pilha.push([7,12,5]);
console.log(pilha.getStack());
console.log(pilha.peek());

pilha.clear();
console.log(pilha.getStack());

pilha.push(10);
console.log(pilha.getStack());
pilha.push(8);
console.log(pilha.getStack());
pilha.pop();
console.log(pilha.getStack());