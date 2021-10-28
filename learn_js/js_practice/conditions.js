// Write a JavaScript program that accept two integers and display the larger
/*
var x , y;
x = window.prompt('First Number', '0');
y = window.prompt('Second Number', '0');
var result;

if(parseInt(x, 10) > parseInt(y, 10)){
    result = "The biggest Number is " + x ;
}else if(parseInt(x, 10) < parseInt(y, 10)){
    result = "The biggest Number is " + y ;
}else{
    result = "Both X="+ x + " and Y="+ y + " Numbers are equal";
}
console.log(result);


const { result } = require("lodash");
*/

// Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor
// Sample numbers : 3, -7, 2
/*
var x=3;
var y=-7;
var z=2;
var result;

if       (x>0 && y>0 && z>0){
    console.log("The sign is +");
}else if (x<0 && y<0 && z<0){
    console.log("The sign is -");
}else if (x>0 && y<0 && z<0){
    console.log("The sign is +");
}else if (x<0 && y>0 && z<0){
    console.log("The sign is +yy");
}else{
    console.log("The sign is -9999");
}


if(x>=0 && y>=0 && z>=0){
    result = 'Positive number +';
}else if(x<0 && y>0 && z>0){
    result = 'Negative Sign -';
}else{
    result = 'Negative sign for sure...'
}
         
console.log(result);
*/
// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : 0, -1, 4
/*
var x=40;
var y=-1;
var z=44;

var result;

if(x>y && x>z && y>z){
    result = "Number sequence is: xyz "+ x +","+y+","+z;
}else if(x>y && x>z && z>y){
    result = "Number sequence is: xzy "+ x +","+z+","+y;
}else if(y>x && y>z && x>z){
    result = "Number sequence is: yxz "+ y +","+x+","+z;
}else if(y>x && y>z && z>x){
    result = "Number sequence is: yzx "+ y +","+z+","+x;
}else if(z>x && z>y && x>y){
    result = "Number sequence is: zxy "+ z +","+x+","+y;
}else if(z>x && z>y && y>x){
    result = "Number sequence is: zyx "+ z +","+y+","+x;
}

console.log(result);
*/

// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : -5, -2, -6, 0, -1
/*
var a=-5;
var b=-2;
var c=-6;
var d=0;
var e=1;

var result;
if(a>b && a>c && a>d && a>e){
    result = "Biggest Number is a: "+ a ;
}else if(b>a && b>c && b>d && b>e){
    result = "Biggest Number is b: "+ b ;
}else if(c>a && c>b && c>d && c>e){
    result = "Biggest Number is c: "+ c ;
}else if(d>a && d>b && d>c && d>e){
    result = "Biggest Number is d: "+ d ;
}else if(e>a && e>b && e>c && e>d){
    result = "Biggest Number is e: "+ e ;
}
console.log(result);
*/

// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// "0 is even"
// "1 is odd"
// "2 is even"

var fDigit = 550;
var lDigit = 580;

for(let i = fDigit; i<= lDigit; i++){
    let reminder = i % 2;
    if(0 != reminder){
        console.log(i+" is EVEN number");
    }else{
        console.log(i+" is ODD number");
    }
}