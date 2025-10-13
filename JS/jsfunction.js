// function hello(user='Guest'){
//     console.log(`Hello ${user}`)
// }

// hello('Ashish');
// hello();

// function sum(a=0,b=0){
//     console.log('Before Return');
//     return (a+b);
//     console.log('After Return');
// }
// console.log(sum(23,34)) ;
// console.log(sum(1)) ;
// console.log(sum()) ;

// const hello=()=>console.log('Hello')
// hello();

const add=(a,b)=>a+b
// add(7,8);
// console.log(add(4,5));

//IIFE Example
// (function (){
//     console.log("Hello Ashish")
// })();

function hello(user,callback){
    console.log(`Hello ${user}`);
    callback();
}

hello('Admin',function(){
    console.log(add(5,5))});
hello('Admin',()=>{
    console.log(add(6,5))});