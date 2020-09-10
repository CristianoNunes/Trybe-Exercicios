const fatorial = (n) => {
    let result = n;
    for(let i = 1; i < n; i += 1){
         result = result * i;
    }
    return result;
}

console.log(fatorial(4));