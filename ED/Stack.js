let Stack = ( () => {
    const stack = new WeakMap();
    class Stack {
        constructor(){
            stack.set(this, []);
        }
        get(){
            return stack.get(this);
        }
        push(elements){
            if(elements.length > 1){
                let temp = Array.from(elements);
                temp.forEach( (obj) => {
                    stack.get(this).push(obj);
                })
            } else {
                stack.get(this).push(elements);
            }
        }
        pop(){
            return (stack.get(this)).pop(); 
        }
        peek(){
            return stack.get(this)[stack.get(this).length-1]
        }
        isEmpty(){
            return (stack.get(this).length === 0) ? true : false;
        }
        clear(){
            if(!this.isEmpty()){
                stack.set(this, []);
            }
        }
        size(){
            return stack.get(this).length;
        }
    }
    return Stack;
})();

exports.default = Stack;
module.exports = exports['default'];