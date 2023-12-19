function fbonacci(n){
    if(n<=1){
        return n;
    }
    else{
        return fbonacci(n-1)+fbonacci(n-2)
    }
}

let numTerm=10;

for(i=0; i<=numTerm; i++){
    console.log(fbonacci(i))
}