//Armstrong Number

// function isArmstrongNumber(number) {
//     const numString = number.toString();
//     const numDigits = numString.length;
//     let sum = 0;
  
//     for (let digit of numString) {
//       sum += Math.pow(parseInt(digit), numDigits);
//     }
  
//     return sum === number;
//   }

//   const testNumber = 1634;

// if (isArmstrongNumber(testNumber)) {
//   console.log(`${testNumber} is an Armstrong number.`);
// } else {
//   console.log(`${testNumber} is not an Armstrong number.`);
// }


function armstrongNum(num){
    let sum=0;
    let numdigits=num.length;


    for(let digit of num){
        sum=sum+Math.pow(parseInt(digit), numdigits)
    }
    return sum===num;
}

let testNum=153;

if(armstrongNum(testNum)){
    console.log(`${testNum} is an Armstrong number.`);
} else {
  console.log(`${testNum} is not an Armstrong number.`);
}
