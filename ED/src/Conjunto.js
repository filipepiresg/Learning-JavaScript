/**
 * Documentacao da classe Conjunto
 * @returns
 */
const Conjunto  = (() => {
    /**
     * Documentacao
     */
    class Conjunto{
        constructor(){
            this.elementos = {};
        }
        /**
         * 
         * @param {*} value adiciona so um valor no conjunto, se ele nao existir
         * @returns
         */
        add(value){
            if(!this.has(value)){
                this.elementos[value] = value;
                return true;
            }
            return false;
        }
        /**
         * 
         * @param {Array} values adiciona varios valores no conjunto, se nao existir
         */
        addAll(values=Array){
            for(let element of values){
                this.add(element);
            }
        }
        /**
         * 
         * @param {*} value delete o valor do conjunto, se existir
         */
        delete(value){
            if(this.has(value)){
                delete this.elementos[value];
                return true;
            }
            return false;
        }
        /**
         * 
         * @param {*} value verifica se existe o valor no conjunto
         * @returns
         */
        has(value){
            return this.elementos.hasOwnProperty(value);
        }
        /**
         * zera o conjunto
         */
        clear(){
           this.elementos = {};
        }
        /**
         * @returns 
         */
        size(){
            return Object.keys(this.elementos).length;
        }
        /**
         * @returns
         */
        values(){
            return Object.values(this.elementos);
        }
        /**
         * 
         * @param {Conjunto} otherSet 
         */
        union(otherSet=Conjunto){
            let unionSet = new Conjunto();
            unionSet.addAll(Object.getOwnPropertyNames(this.elementos));
            unionSet.addAll(Object.getOwnPropertyNames(otherSet));
            return unionSet.values();
        }
        /**
         * 
         * @param {Conjunto} otherSet 
         */
        intersection(otherSet=Conjunto){
            let intersectionSet = new Conjunto();
            for(let element in this.elementos){
                if(otherSet.has(element)){
                    intersectionSet.add(element);
                }
            }
            return intersectionSet;
        }
        /**
         * 
         * @param {Conjunto} otherSet 
         */
        difference(otherSet = Conjunto){
            let diffSet = new Conjunto();
            for(let element in this.elementos){
                if(!otherSet.has(element)){
                    diffSet.add(element);
                }
            }
            return diffSet;
        }
        /**
         * 
         * @param {Conjunto} otherSet 
         */
        sub(otherSet = Conjunto){
            if(otherSet.size() >= this.size()){
                for(let element in this.elementos){
                    if(!otherSet.has(element)){
                        return false;
                    }
                }
                return true;
            }
            return false;
        }
    }
    return Conjunto;
})();

exports.default = Conjunto;
module.exports = exports['default'];