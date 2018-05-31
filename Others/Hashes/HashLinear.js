const Hash = require('../../ED/src/Hash');
const createElement = function(key=(Number || String), value) {
    let element = {
        key : key,
        value : value,
        toString : () => { return `[${key} - ${value}]` }
    }
    return element;
}
const HashLinear = (() => {
    class HashLinear{
        constructor(){
            super();
        }
        put(key=(Number || String), value){
            let position = this.hashCode(key), index = position;
            if(!this.table[position]){
                let index = ++position;
                while(this.table[index]){
                    index++;
                }
                position = index;
            }
            this.table[index] = createElement(key, element);
        }
        get(key){
            let position = this.hashCode(key), element;
            while(this.table[position]){
                position++;
            }
            if(this.table[position].key === key){
                element = this.table[positon];
            }
            return element;
        }
        remove(key){
            let position = this.hashCode(key), element;
            while(this.table[position].key !== key && this.table[position]){
                position++;
            }
            if(this.table[position].key === key){
                element = this.table[position];
                this.table[position] = undefined;
            }
            return element;
        }
    }
    return HashLinear;
})();

exports.default = HashLinear;
module.exports = exports['default'];