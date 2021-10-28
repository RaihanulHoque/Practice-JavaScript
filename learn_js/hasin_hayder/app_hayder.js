// part- 4 (Comparison and decission making)
// -------------------------------------------
/*
var n=22;
var m = 22;

if (n>m){
    console.log("n is greater than m");
}else if(n==m){
    console.log("n is equal to m");
}else{
    console.log("n is smaller than m");
}

if (8 == n){
    console.log("thik nai");
}else{
    console.log("thik ache");
}
*/


// Nasting comparison 
// ---------------------
/*
var personOne = "jamal";
var personTwo = "kamal";
var areTheyBrother = true;

// if("Jamal"==personOne){
//     if("kamal"==personTwo){
//         if(areTheyBrother){
//             console.log('They are brother!');
//         }else{
//             console.log('they are not bro');
//         }
//     }
// }

if('jamal'==personOne && 'kamal'== personTwo && areTheyBrother){
    console.log('they are brother in one line');   
}else{
    console.log('they are nNOT brother in one line');
}
*/


//useage of "OR"
//chekcing prime number
//2,3,5,7
/*
var n =2;

if (10 > n ){
    if(2 == n || 3 == n || 5== n|| 7==n){
        console.log("this number is", n, " is smaller then 10 and its a prime number");
    }else{
        console.log("this number is", n, " is smaller then 10 and its NOT a prime number");
    }
}else{
    console.log("this number is", n, " is Greater then 10");
}

//without nasting
if( 10>n && (2 == n || 3 == n || 5== n|| 7==n)){
    console.log("this number is", n, " is smaller then 10 and its a prime number");
}else if(10>n){
    console.log("this number is", n, " is smaller then 10 and its NOT a prime number");
}else{
    console.log("this number is", n, " is Greater then 10");
}

*/

//SOME IF-ELSE Condition of fun
// ---------------------------------

//finding a number is positive or negative
/*
var n = 12;
if( 0<n ){
    var result = 'this number '+ n + ' is possitive';
}else{
    var result = 'this number '+ n + ' is NEGATIVE';
}
console.log(result);
*/

//finding a number even or ODD
//----------------------------
// if a number is devided by '2' and its REMINDER is '0' then its even
/*
var n = 32423423429;
var result;

var reminder = n % 2;
if(0 == n){
    result = 'This number is a nutral number';
}else if(0 == reminder){ //if reminder is zero after devided by 2
    result = 'This number is even';
}else{
    result = 'this number is ODD';
}
console.log(result);
*/
// Eligible or not finding
//************************ */
/*
var rating = "g";
var age = 0;
var result;
if (("pg" == rating && age>=13) || ("r" == rating && age>=18)|| ("g" == rating)){
    result = "You can watch this movies";
}else{
    result = "You can NOT watch this movies";
}
console.log(result);

*/

//Finding Toddler, Child or adult
//----------------------------
/*
var yourAge = 1222;
var result;
if(0 > yourAge || 200 < yourAge){
    result = "vampire";
}else if(1 >= yourAge || 0 == yourAge){
    result = "Baby";
}else if(3 >= yourAge){
    result = 'Toddler';
}else if(12 >= yourAge){
    result = "kid";
}else if(18 > yourAge){
    result = "Teenager";
}else if(18 <= yourAge){
    result = "Adult";
}
console.log(result);
*/


//Ternary Operator
// ----------------------
/*
var n = -50;
var result;

var reminder = n % 2;
if(0 == n){
    result = 'This number is a nutral number';
}else if(0 == reminder){ //if reminder is zero after devided by 2
    result = 'This number is even';
}else{
    result = 'this number is ODD';
}

result = (n < 0)?"Negative":"Positive";
console.log("This is a ", result, " Number");

var n = 10;
var result;

var reminder = n % 2;
// console.log(n);
// if( 0 == reminder){
//     result = 'EVEN';
// }else{
//     result = 'ODD';
// }

result = (reminder == 0)?"EVEN":"ODD";
console.log(result);
*/