const loseLoseHashCode = function(key=(Number || String)) {
    let hash = 0;
    for(let i=0; i < (key.toString()).length; i++){
        hash += (key.toString()).charCodeAt(i);
    }
    return hash % 37;
}
const djb2HashCode = function(key=(Number || String)){
    let hash = 5381;
    for(let i=0; i<key.toString().length; i++){
        hash = hash * 33 + key.toString().charCodeAt(i);
    }
    return hash % 1013;
}

const Hash = (() => {
    class Hash {
        constructor(){
            this.table = [];
            this.colision=0;
        }
        put(key=(String || Number), value){
            if(this.has(key)){
                this.colision++;
            }
            this.table[this.hashCode(key)] = value;
        }
        has(key){
            return (this.table[this.hashCode(key)] !== undefined);
        }
        remove(key=(String || Number)){
            if(this.has(key)){
                this.table[this.hashCode(key)] = undefined;
                return true;
            }
            return false;
        }
        get(key=(String || Number)){
            return this.table[this.hashCode(key)];
        }
        getColision(){
            return this.colision;
        }
        clear(){
            this.table = [];
            this.colision = 0;
        }
        hashCode(key){
            // return loseLoseHashCode(key);
            return djb2HashCode(key);
        }
    };
    return Hash;
})();

exports.default = Hash;
module.exports = exports['default'];