//function

function sum(a,b){
    let sum=a+b;
    return(`my sum is ${sum}`);
}
// console.log(sum(2,4));

//way2 -> first class function
let ans=function print(){
    return("i am print ka function");
}
// console.log(print());
console.log(ans());