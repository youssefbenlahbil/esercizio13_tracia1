  
// IN MODO CRESCENTE

let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];


for(let i = 0; i < array.length - 1; i++) {
    for(let k = i + 1; k < array.length; k++) {
        
        //swap
        
        if(array[i] > array[k]) {
        
            let temp = array[i];
            array[i] = array[k];
            array[k] = temp;
        }             
    }
}

console.log(array);


// IN MODO DECRESCENTE


let number = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];


for(let i = 0; i < number.length - 1; i++) {
    for(let k = i + 1; k < number.length; k++) {
        
        //swap
        
        if(number[i] < number[k]) {
        
            let temp = number[i];
            number[i] = number[k];
            number[k] = temp;
        }             
    }
}


console.log(number);
