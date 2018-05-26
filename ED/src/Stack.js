let Stack = ( () => {
    const itens = new WeakMap();
    class Stack {
        constructor(){
            itens.set(this, []);
        }
        get(){
            return itens.get(this);
        }
        push(elements){
            if(elements.length > 1){
                for(let element of elements){
                    itens.get(this).push(element);
                }
            } else {
                itens.get(this).push(elements);
            }
        }
        pop(){
            return (itens.get(this)).pop(); 
        }
        peek(){
            return itens.get(this)[itens.get(this).length-1]
        }
        isEmpty(){
            return (itens.get(this).length === 0) ? true : false;
        }
        clear(){
            if(!this.isEmpty()){
                itens.set(this, []);
            }
        }
        size(){
            return itens.get(this).length;
        }
    }
    return Stack;
})();

exports.default = Stack;
module.exports = exports['default'];