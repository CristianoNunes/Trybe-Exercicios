let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallerNumber = numbers[0];
for(let position = 0; position < numbers.length; position += 1){
    if( smallerNumber > numbers[position] ){
         smallerNumber = numbers[position];
    }
}
console.log(smallerNumber);