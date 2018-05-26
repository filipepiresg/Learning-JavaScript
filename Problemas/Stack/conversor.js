const Stack = require('./../../ED/src/Stack.js');

toBin = ( (param=0, limit=4) => {
    let retorno = '';
    let pilha = new Stack;
    while(param > 0){
        let resto = Math.floor(param % 2);
        param = Math.floor(param/2);
        pilha.push(resto);
    }
    while(pilha.size() < limit){
        pilha.push(0);
    } 
    while(!pilha.isEmpty()){
        retorno += pilha.pop();
    }
    return retorno;
});
toDec = ( (param='0000') => {
    let retorno = 0;
    for(let i=0; i < param.length; i++){
        retorno += (parseInt(param[i]) * (2**(param.length-i-1)));
    }
    return retorno;
});

console.log(toDec());