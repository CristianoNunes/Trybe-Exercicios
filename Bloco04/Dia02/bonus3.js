let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];
let aux = 0;

for (let i = 0; i < numbers.length; i+= 1) {
    if(numbers[i+1] == null){
        aux = numbers[i]*2;
        newArray.push(aux);
    }else{
        aux = numbers[i]*numbers[i+1];
        newArray.push(aux);
    }

}
console.log(newArray);