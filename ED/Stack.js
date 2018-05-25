class Stack {
    constructor(){
        this.stack = new Array();
        // this[_index] = 0;
    }
    getStack(){
        return this.stack;
    }
    push(elements){
        if(elements.length > 1){
            let temp = Array.from(elements);
            temp.forEach( (obj) => {
                (this.stack).push(obj);
            })
        } else {
            (this.stack).push(elements);
        }
    }
    pop(){
        return this.stack.pop();
    }
    peek(){
        return this.getStack()[this.stack.length-1];
    }
    isEmpty(){
        return (this.getStack().length === 0) ? true : false;
    }
    clear(){
        if(!this.isEmpty()){
            this.stack = [];
        }
    }
    size(){
        return this.stack.length;
    }
}

exports.default = Stack;
module.exports = exports['default'];