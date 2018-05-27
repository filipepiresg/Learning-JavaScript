const ListaLigada = require('../src/ListaLigada.js');
let linked = new ListaLigada;

console.log(linked.isEmpty());
console.log(linked.size());
linked.append('Filipe');
// console.log(linked.size());
// console.log(linked.toString());

linked.insert(1,'Rodrigo');
linked.insert(5,'Iolanda');

/* console.log(linked.size());
console.log(linked.toString());

console.log(linked.removeAt(0));
console.log(linked.size());
console.log(linked.toString());

console.log(linked.removeAt(2));
console.log(linked.size());
console.log(linked.toString()); */

linked.append('Filipe');/* 
console.log(linked.size());
console.log(linked.toString());
console.log(linked.remove('Filipe'));
// console.log(linked.remove('Rodrigo'));
console.log(linked.remove('Filipe'));
console.log(linked.size());
console.log(linked.toString()); 
*/

console.log(linked.isEmpty());
console.log(linked.size());
console.log(linked.toString()); 
console.log(linked.indexOf(0));
