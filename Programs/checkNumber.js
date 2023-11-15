//check number is positive , negative or zero

function checkNum(num){
    if(num==0){
        return `given number ${num} is zero`
    }
    else if(num>0){
        return `given number ${num} is positive` 
    }
    return `given number ${num} is positive` 
    
}

console.log(checkNum(0))
console.log(checkNum(5))
console.log(checkNum(-69))