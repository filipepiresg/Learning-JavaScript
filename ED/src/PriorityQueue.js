const Queue = require('./Queue.js');

const PriorityQueue = (()=>{
    // const queue = new WeakMap();
    class PriorityQueue extends Queue{
        constructor(type='max'){
            super();
            if(type.toLowerCase() !== 'max' && type.toLowerCase() !== 'min'){
                type = 'max';
            }
            this.type = type.toLowerCase();//nao funciona variaveis privadas
            // queue.set(this,[]);
        }
        getType(){
            return this.type;
        }
        enqueue(item, priority=1){
            let queueElement ={
                item: item,
                priority: priority
            };
            let added = false;
            for(let i=0; i < super.get().length; i++){
                if(!added && this.type === 'max'){//   verificar
                    if(queueElement.priority > (super.get())[i].priority){
                        super.get().splice(i, 0, queueElement);
                        added = true;
                        break;
                    }
                } else if(!added && this.type === 'min'){
                    if(queueElement.priority < (super.get())[i].priority){
                        super.get().splice(i, 0, queueElement);
                        added = true;
                        break;
                    }
                }
            }
            if(!added){
                (super.get()).push(queueElement);
            }
        }
        // get(){
            
        // }
    }
    return PriorityQueue;
})();

exports.default = PriorityQueue;
module.exports = exports['default'];