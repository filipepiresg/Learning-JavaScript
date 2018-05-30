const Hash = require('../../ED/src/Hash');
const ListaLigada = require('../../ED/src/ListaLigada');

const createElement = function(key=(Number || String), value) {
    let element = {
        key : key,
        value : value,
        toString : () => { return `[${key} - ${value}]` }
    }
    return element;
}
const HashLinked = (() => {
    class HashLinked extends Hash{
        constructor(){
            super();
        }
        put(key, value){
            let position = this.hashCode(key);
            if(!this.has(key)){
                this.table[position] = new ListaLigada();
            }
            this.table[position].append(createElement(key, value));
            // console.log(this.table);
        }
        
        get(key=(Number || String)){
            let string = '(';
            if(this.has(key)){
                let position = this.hashCode(key);
                string += position+': '+(this.table[position]).toString()+')';
            }
            return string+")";
        }
        print(){
            let string = '{';
            for(let position in this.table){
                string += '('+position+': '+this.table[position].toString();
                string += (this.table[position].next) ? '\n)': ')';
            }
            return string+'}';
        }
       /**
        * Remove o primeiro elemento do lista ligada
        * @param {*} key 
        */
        remove(key=(Number || String)){
            return this.table[hashCode(key)].removeAt(0);
        }
    }
    return HashLinked;
})();


exports.default = HashLinked;
module.exports = exports['default'];