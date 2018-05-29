const SimpleNode = require('./SimpleNode.js');

let DoubleNode = (() => {
    /**
     * 
     */
    class DoubleNode extends SimpleNode{
        constructor(previous=null, element=null,next=null){
            super(element, next);
            this.previous = previous;
        }
        /**
         * @returns 
         */
        getPrevious(){
            return this.previous;
        }
    }
    return DoubleNode;
})();

exports.default = DoubleNode;
module.exports = exports['default'];