let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggerNumber = 0;
for(let position = 0; position < numbers.length; position += 1){
    if( numbers[position] > biggerNumber){
        biggerNumber = numbers[position];
    }

}
console.log(biggerNumber);