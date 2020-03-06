// function DoubleIt(num){
//     return num*2;

// }
// const DoubleIt=function(num){
// return num*5;
// }
const doubleIt = num=> num *2
const add =(x,y)=> x+y;
const result1= add(10,15);
console.log(result1);
const give5 =()=>5;
const amichai =give5();
const doMath =(x,y)=>{
    const sum =x+y;
    const diff =x - y;
    const result= sum * diff;
    return result;
}
const result3 =doMath(7,5);
console.log(result3);




console.log(amichai);
const result =doubleIt(5);
console.log(result);