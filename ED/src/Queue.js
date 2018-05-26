let Queue = ( () => {
    const itens = new WeakMap();
    class Queue {
        constructor(){
            itens.set(this, []);
        }
        get(){
            return itens.get(this);
        }
        enqueue(elements){
            if(typeof elements === 'object'){
                for(let element of elements){
                    itens.get(this).push(element);
                }
            } else {
                itens.get(this).push(elements);
            }
        }
        dequeue(){
            return itens.get(this).shift();
        }
        front(){
            return itens.get(this)[0];
        }
        isEmpty(){
            return (itens.get(this)).length === 0;
        }
        clear(){
            itens.set(this, []);
        }
        size(){
            return (itens.get(this)).length;
        }
    }
    return Queue;
})();

exports.default = Queue;
module.exports = exports['default'];