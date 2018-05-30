const Dicionario = (() => {
    class Dicionario {
        constructor (){
            let elementos = {};
        }
        set(key, value){
            this.elementos[key] = value;
        }
        delete(key){
            if(this.has(key)){
                delete this.elementos[key];
                return true;
            }
            return false;
        }
        has(key){
            return key in this.elementos;
        }
        get(key){
            return (this.has(key)) ? this.elementos[key] : undefined;
        }
        clear(){
            this.elementos = {};
        }
        size(){
            return Object.keys(this.elementos).length;
        }
        keys(){
            return Object.keys(this.elementos);
        }
        values(){
            let values = [];
            for(let elemento in this.elementos){
                if(this.has(elemento)){
                    values.push(element);
                }
            }
            return values;
            // return Object.values(this.elementos);
        }
        getItems(){
            return this.elementos;
        }
    }
    return Dicionario;
})();

exports.default = Dicionario;
module.exports = exports['default']