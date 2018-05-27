const BubbleSort = {
    sort: (array=[Number], tipo='crescente') => {
        let arrayOrder = Array.of(...array);
        if(tipo.toLowerCase() === 'crescente'){
            for(let i=0; i<arrayOrder.length-1; i++){
                for(let j=i+1; j<arrayOrder.length; j++){
                    if(arrayOrder[i] > arrayOrder[j]){
                        // nao ta fazendo swipe
                        let temp = arrayOrder[j];
                        arrayOrder[j] = arrayOrder[i];
                        arrayOrder[i] = temp;
                    }
                }
            }
        } else if(tipo.toLowerCase() === 'decrescente'){
            for(let i=0; i<arrayOrder.length-1; i++){
                for(let j=i+1; j<arrayOrder.length; j++){
                    if(arrayOrder[i] < arrayOrder[j]){
                        // nao ta fazendo swipe
                        // arrayOrder[i], arrayOrder[j] = arrayOrder[j], arrayOrder[i];
                        let temp = arrayOrder[j];
                        arrayOrder[j] = arrayOrder[i];
                        arrayOrder[i] = temp;
                    }
                }
            }
        }
        return arrayOrder;
    }
}

exports.default = BubbleSort;
module.exports = exports['default'];