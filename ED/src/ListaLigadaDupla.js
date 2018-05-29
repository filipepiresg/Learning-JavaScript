const ListaLigada = require('./ListaLigada.js');
const DoubleNode = require('./DoubleNode.js');
let ListaLigadaDupla = ( ( )=> {
    class ListaLigadaDupla extends ListaLigada {
        constructor(){
            super();
            this.head = new DoubleNode();
            this.tail = new DoubleNode();
            this.head.next = this.tail;
            this.tail.previous = this.head;
        }
        append(element){
            if(this.head.element === null){
                this.head.element = element;
            } else {
                this.tail.element = element;
                this.tail.next = new DoubleNode(this.tail);
                this.tail = this.tail.next;
            }
        }
        /**
         * 
         * @param {number} pos 
         * @param {*} element 
         */
        insert(pos=0, element){
            if(pos < 0 || pos > super.size()){
                this.append(element);
            } else {
                let i =0, node = this.head;
                while(pos > i){
                    node = node.next;
                    i++;
                }
                let newNode = new DoubleNode(node.previous, element, node);
                node.previous.next = newNode;
                node.previous = newNode;
            }
        }
        /**
         * 
         * @param {Number} pos 
         */
        removeAt(pos=0){
            let node;
            if(pos === 0){
                node = this.head;
                this.head = this.head.next;
                this.head.previous = null;
            } else if(pos === (super.size()-1)){
                node = this.tail.previous;
                node.previous.next = node.next;
                node.next.previous = node.previous;
            } else {
                let i =0;
                node = this.head;
                while(pos > i){
                    node = node.next;
                    i++;
                }
                node.next.previous = node.previous;
                node.previous.next = node.next;
            }
            return node;
        }
        remove(element){
            let node;
            if(this.head === element){
                node = this.removeAt(0);
            } else{
                let i=0, node = this.head;
                while(node.element !== null && node.element !== element){
                    node = node.next;
                    i++;
                }
                if(node.element === element){
                    node = this.removeAt(i);
                }
            }
            return node;
        }
        
        
        
        getTail(){
            return this.tail;
        }
    }
    return ListaLigadaDupla;
})();

exports.default = ListaLigadaDupla;
module.exports = exports['default'];