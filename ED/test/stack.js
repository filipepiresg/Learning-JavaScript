const Stack = require('./../src/Stack.js');

let pilha = new Stack;
console.log(pilha.isEmpty());
pilha.push(1);
console.log(pilha.isEmpty());
console.log(pilha.get());

pilha.push([7,12,5]);
console.log(pilha.get());
console.log(pilha.peek());

pilha.clear();
console.log(pilha.get());

pilha.push(10);
console.log(pilha.get());
pilha.pop();
pilha.push(8);
console.log(pilha.get());
pilha.push([7,12,5]);
console.log(pilha.get());