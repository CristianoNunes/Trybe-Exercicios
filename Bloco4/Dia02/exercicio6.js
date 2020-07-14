let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for(let position = 0; position < numbers.length; position += 1){
    if( numbers[position] % 2 != 0){
        impar += 1;
    }else {
        console.log("Nenhuma valor ímpar encontrador");
    }
}
console.log(impar);