const Hash = require('../src/Hash');

let hash = new Hash();
console.log(hash.getColision());
// console.log(hash.hashCode('a'));
hash.put('a','aaa');
console.log(hash.get('a'));
hash.put('a','novo');
console.log(hash.getColision());
console.log(hash.get('a'));
console.log(hash.remove('a'));