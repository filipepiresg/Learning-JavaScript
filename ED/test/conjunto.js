const Conjunto = require('../src/Conjunto.js');
let set = new Conjunto();

console.log(set.add('Filipe'));
console.log(set.values());
set.clear();
console.log(set.delete('Filipe'));
set.addAll(['filipe','rodrigo','iolanda']);
console.log(set.values());
console.log(set.union({'Filipe':'Filipe'}));
console.log(set);