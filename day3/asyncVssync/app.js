
//sync
// console.log("first");
// console.log("second");
// console.log("third");

//async->settimeout
// console.log("first");

//  setTimeout(function(){
//     console.log("it will after 4sec");
//  },4000)
// setTimeout(function(){
//     console.log("it will after 2sec")
// },2000)

// console.log("third");

//setInterval()

// setInterval(function(){
//     console.log("it will run after 2sec")
// },2000)


let count=0;
let intervalId=setInterval(function(){
    count++;
    console.log(`my count is: ${count}`);
    if(count===10){
        clearInterval(intervalId);
        console.log('task completed');
    }
},1000)