// // var let count

// var a; // js automatic isko undefined de deti hai
// var a = 12;

// let a;
// console.log(a); // undefined

// // let a = 12;
// // const a = 12;
// var userName = "Harsh";


// // declaration and initialization
// var name; // declare karna 
// var name = "harsh"; // declare  and initialize

// let a;


// var b = 13;
// // window mein add hota hai 
// // function scoped hota hai
// // aap fhir se declare kar sakte hai same name se error nahi aayega

// // scope (global, block, function)
// // var function scope, let and const block scope hota hai
// var c = 10; // global

// {
//   var d = 10;
// }
// // var is block ko nahi manta hai wo pure code me use ho sakta hai
// function name(){
//   if(true){
//     var num = 30; // ye var pure function me use ho sakta hai but function ke bahar nahi.
//   }
// }

// function abc(){
//   if(true){
//     let num = 40; // ab ye let ko {} ke bahar access nahi kar sakte ho
//   }
// }

/////////////////////////////////////////////////////////////////////////////////


// var a; declaration , a=20; pahli value dena Initialization, 
// var a = 12;
// a = 32;


// Temporal Dead Zone
// console.log(a); // Cannot access 'a' before initialization
// let a = 12;

// console.log(b);
// var b = 12;

// var c = 1;
// {
//   var c = 2;
// }
// console.log(c);

// const person = {name: "Harsh"};
// person.name = "Sharma" // allowed
// person = {}; // not allowed


// const person = {
//   "name" : "harsh",
//   "cource" : "MTech",
//   "age" : 23
// }

// Object.freeze(person); // to freeze object after this change not allow

// person.name = "Amit";
// person.Income = "50K";
// person.Gender = "male";

// delete person.Gender;
// console.log(person);


