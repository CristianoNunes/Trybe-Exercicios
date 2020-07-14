let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let average = 0;
for(let position = 0; position < numbers.length; position += 1){
    sum += numbers[position];
}
average = (sum / numbers.length);
if(average > 20){
    console.log("valor maior que 20");
}else{
    console.log( "valor menor ou igual a 20");
}