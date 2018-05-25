const Stack = require('./../../ED/Stack.js');

let value = 0;

const converDecimalBinario = ( (param=0, limit=4) => {
    let retorno = '';
    let pilha = new Stack;
    do{
        let resto = Math.floor(param % 2);
        param = Math.floor(param/2);
        pilha.push(resto);
    } while(param > 0);
    while(pilha.size() < limit){
        pilha.push(0);
    }
    while(!pilha.isEmpty()){
        retorno += pilha.pop();
    }
    return retorno;
});
const converBinarioDecimal = ( (param='0000') => {
    let retorno = 0;
    for(let i=0; i < param.length; i++){
        retorno += (parseInt(param[i]) * (2**(param.length-i-1)));
    }
    return retorno;
});

console.log(converDecimalBinario(20, 6)); // 20 em 6 bits = 010100
console.log(converBinarioDecimal("110100")); // 52
