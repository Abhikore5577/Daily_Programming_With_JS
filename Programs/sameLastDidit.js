//Program to Check if the Numbers Have Same Last Digit
function sameLasttDigit(n1,n2){
    lastDigitN1=n1%10;
    lastDigitN2=n2%10;

    if(lastDigitN1==lastDigitN2){
        console.log(`Last digit of ${n1} and ${n2} is same`)
    }
    else{
        console.log(`Last digit of ${n1} and ${n2} is not same`)  
    }

}
 sameLasttDigit(123, 523);
 sameLasttDigit(123, 5245);


 //reverse the Number
// n=123;
// rev=0
// while(n!=0){
//     let lastdig=n%10;
// rev=rev*10+lastdig;
// n=parseInt(n/10)
// }
// console.log(rev)