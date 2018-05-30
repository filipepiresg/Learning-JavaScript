const SimpleNode = require('./SimpleNode.js');
let ListaLigada = ( () => {
    class ListaLigada {
        constructor(){
            this.head = new SimpleNode();
        }
        append(element){
            let node = this.head;
            while(node.element){
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
                let otherNode = new SimpleNode(node.element, node.next);
                node.next = otherNode;
                node.element = element;
            } 
        }
        removeAt(pos=Number){
            let node;
            if(pos === 0){
                node = this.head;
                this.head = this.head.next;
            } else if(pos > 0 && pos < this.size()){
                let index=0, node = this.head;
                while(index < pos-1){
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
            let node, nodeAux = this.head, i=0;
            while(nodeAux.next){
                if(nodeAux.element === element){
                    node = removeAt(i);
                    break;
                }
                i++;
            }
            return node;
        }
        indexOf(pos=0){
            let node;
            if(pos >= 0 && pos < this.size()){
                node = this.head;
                let index = 0;
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
            while(node.element){
                size++; 
                node = node.next;
            }
            return size;
        }
        toString(){
            let node = this.head, string='[';
            while(node.element !== null){
                string += node.element + ((node.next.element) ? ' -> ' : '');
                node = node.next;
            }
            return string+']';
        }
        get(){
            return this.head;
        }
        /**
        * 
        * @param {*} element 
        */
        search(element){
            let node;
            if(this.size() > 0){
                node = this.head;
                while(node.getElement() !== element){
                    node = node.next;
                }
                if(node.element === null){
                    node = undefined;
                }
            }
            return node;
        }
    }
    return ListaLigada;
})();

exports.default = ListaLigada;
module.exports = exports['default'];