const BubbleSort = {
    sort: (array=[Number], tipo='crescente') => {
        let arrayOrder = Array.of(...array);
        if(tipo.toLowerCase() === 'crescente'){
            for(let i=0; i<arrayOrder.length-1; i++){
                for(let j=i+1; j<arrayOrder.length; j++){
                    if(arrayOrder[i] > arrayOrder[j]){
                        [arrayOrder[i], arrayOrder[j]] = [arrayOrder[j], arrayOrder[i]];
                    }
                }
            }
        } else if(tipo.toLowerCase() === 'decrescente'){
            for(let i=0; i<arrayOrder.length-1; i++){
                for(let j=i+1; j<arrayOrder.length; j++){
                    if(arrayOrder[i] < arrayOrder[j]){
                        [arrayOrder[i], arrayOrder[j]] = [arrayOrder[j], arrayOrder[i]];
                    }
                }
            }
        }
        return arrayOrder;
    }
}

exports.default = BubbleSort;
module.exports = exports['default'];