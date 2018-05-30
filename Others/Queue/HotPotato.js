const Queue = require('../../ED/src/Queue.js');

const HotPotato = {
    start: ( (players=[], number=players.length) => {
        let fila = new Queue;
        if(players.length < 1){
            return 'sem jogadores!';
        }
        for(let i=0; i < players.length; i++){
            fila.enqueue(players[i]);
        }
        while(fila.size() > 1){
            for(let i=0; i < number; i++){
                fila.enqueue(fila.dequeue());
            }
            fila.dequeue();
        }
        return fila.dequeue();
    })
};

exports.default = HotPotato;
module.exports = exports['default'];