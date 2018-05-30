const Stack = require('./../../ED/src/Stack.js');
const Conversor = {
    toBin: ( (decimal=0, bits=4) => {
        let retorno = '', pilha = new Stack, negative=false;
        // verifica se precisa usar complemento de 2
        if(decimal.toString()[0] === '-'){
            negative = true;
            decimal = Math.abs(decimal);
        }
        // transforma em binario
        while(decimal > 0){
            // console.log(decimal);
            let resto = Math.floor(decimal % 2);
            decimal = Math.floor(decimal/2);
            pilha.push(resto);
        }
        // completa os bits
        if(negative){
            bits *= 2;
        }
        while(pilha.size() < bits){
            pilha.push(0);
        } 
        
        // transforma em string
        while(!pilha.isEmpty()){
            retorno += pilha.pop();
        }
        //complemento de 2
        if(negative){
            let firstOne = true, temp = retorno.split('');
            for(let i=temp.length-1; i >= 0 ; i--){
                if(firstOne){
                    if(temp[i] === '1'){
                        firstOne = false;
                    }
                } else {
                    if(temp[i] === '1'){
                        temp.splice(i,1,'0');
                    } else {
                        temp.splice(i,1,'1');
                    }
                }
            }
            retorno = temp.join('');
        }
        return retorno;
    }),
    toDec : ( (binario='0000', signed=false) => {
        let retorno = 0, negative = false;
        // verifica se é negativo
        if(signed && binario[0] ==='1'){
            negative = true;
        }
        
        //complemento de 2
        if(negative){
            let firstOne = true, temp = binario.split('');
            for(let i=temp.length-1; i >= 0 ; i--){
                if(firstOne){
                    if(temp[i] === '1'){
                        firstOne = false;
                    }
                } else {
                    if(temp[i] === '1'){
                        temp.splice(i,1,'0');
                    } else {
                        temp.splice(i,1,'1');
                    }
                }
            }
            binario = temp.join('');
        }
        for(let i=0; i < binario.length; i++){
            retorno += (binario[i]* (2**(binario.length-1-i)));
        }
        
        if(negative){
            retorno = parseInt('-'+retorno);
        }
        return retorno;
    }),
    converterBase : ( (value=0, base=2) => {
        let digitos = '0123456789ABCDEF', retorno ='', pilha = new Stack;
        while(value > 0){
            let resto = Math.floor(value % base);
            value = Math.floor(value / base);
            pilha.push(resto);
        }
        while(!pilha.isEmpty()){
            retorno += digitos[pilha.pop()];
        }
        return retorno;
    })
};

exports.default = Conversor;
module.exports = exports['default'];