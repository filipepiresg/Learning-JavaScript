const SimpleNode = require('./SimpleNode.js');
let ListaLigada = ( () => {
    class ListaLigada {
        constructor(){
            this.head = new SimpleNode();
        }
        append(element){
            let node = this.head;
            while(node.element !== null){
                node = node.next;
            }
            node.element = element;
            node.next = new SimpleNode();
        }
        insert(pos=this.size(), element){
            if(pos < 0 || pos >= this.size()){
                this.append(element);
            } else {
                let node = this.head;
                for(let i=0; i<pos; i++){
                    node = node.next;
                }
                let newNode = new SimpleNode(node.element, node.next);
                node.element = element;
                node.next = newNode;
            }
        }
        removeAt(pos){
            let node;
            if(pos === 0 && pos < this.size()){
                node = this.head;
                this.head = this.head.next;
            } else if(pos > 0 && pos < this.size()){
                let index=0, node = this.head;
                while(index-1 < pos){
                    node = node.next;
                    index++;
                }
                let tmp = node.next;
                node.next = (node.next).next;
                node = tmp;
            }
            return node;
        }
        remove(element){
            let node;
            if((this.head).element === element){
                node = this.head;
                this.head = (this.head).next;
            } else if((this.head).element !== null){
                node = this.head;
                while((node.next).element !== element && (node.next).element !== null){
                    node = node.next;
                }
                if((node.next).element === null){
                    // node = undefined;
                    return undefined;
                } else {
                    let temp = node.next;
                    node.next = (node.next).next;
                    node = temp;
                }
            } else {
                return undefined;
            }
            return node;
        }
        indexOf(pos=0){
            let node;
            if(pos >= 0 && pos < this.size()){
                node = this.head;
                let index =0;
                while(index < pos){
                    node = node.next;
                    index++;
                }
            }
            return node; 
        }
        isEmpty(){
            return (this.size() === 0);
        }
        size(){
            let size = 0, node = this.head;
            while(node.element !== null){
                size++;
                node = node.next;
            }
            return size;
        }
        toString(){
            let node = this.head, string='';
            while(node.element !== null){
                string += node.element+" ";
                node = node.next;
            }
            return string;
        }
        get(){
            return this.head;
        }
    }
    return ListaLigada;
})();

exports.default = ListaLigada;
module.exports = exports['default'];