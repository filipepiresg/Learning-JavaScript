const ListaLigadaDupla = require('../src/ListaLigadaDupla.js');

lista = new ListaLigadaDupla();
// console.log(lista.get());
lista.append('Filipe');
lista.append('Rodrigo');
lista.append('Iolanda');

// console.log(lista.get());
lista.remove('Rodrigo');
// console.log(lista.removeAt(0));
console.log(lista.get().next);
console.log(lista.size());