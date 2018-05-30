const HashLinked = require('../../Others/Hashes/HashLinked');

const hash = new HashLinked();

hash.put('a', 'aaaa');
console.log(hash.get('a'));
console.log(hash.print());