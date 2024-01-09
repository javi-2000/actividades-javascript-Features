function sum(...num) {
    return num.reduce((acc, n)=> acc+n, 0);
}

function numbers(...nums){
    return nums
}

console.log(sum(2,4,6,8,10));
console.log(numbers(2,3,4,5,6)); //el SPLIT OPERATOR tira todos los números en un ARRAY 