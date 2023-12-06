//Program to Find LCM

// function LCM(num1,num2){
//     if(num1===0 || num2===0){
//         return 0
//     }
//      while(true){
//         if(num1%num2===0){
//             return num1;

//         }
//         if(num2%num1===0){
//             return num2
//         }
//         if (num1>num2){
//             num1=num1-num2;
//         }
//         else{
//             num2=num2-num1;
//         }
//      }
//}

function lcm(num1, num2) {
    if (num1 === 0 || num2 === 0) {
      return 0;
    }
  
    while (true) {
      if (num1 % num2 === 0) {
        return num1;
      } else if (num2 % num1 === 0) {
        return num2;
      }
  
      if (num1 > num2) {
        num1 = num1 - num2;
      } else {
        num2 = num2 - num1;
      }
    }
  }
  


console.log(lcm(10,15))