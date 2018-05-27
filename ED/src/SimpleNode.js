let SimpleNode = ( () => {
    class SimpleNode {
        constructor(element=null, next=null){
            this.element = element;
            this.next = next;
        }
        getElement(){
            return this.element;
        }
        getNext(){
            return this.next;
        }
    }
    return SimpleNode;
})();

exports.default = SimpleNode;
module.exports = exports['default'];