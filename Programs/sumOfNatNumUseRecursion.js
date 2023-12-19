function sumOfNatNum(n){
    if (n===0){
        return 0
    }

    else{
        return n + sumOfNatNum(n-1);
    }
}
let n=10;
result=sumOfNatNum(n);
console.log(`Sum of first ${n}  number is ${result}`)
