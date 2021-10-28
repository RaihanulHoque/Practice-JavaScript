// Part :2
/*
console.log('ai hoti roisi');
console.log(true);
console.log(document);
console.error('This is an error message');
console.warn('This is an WARNING message');
*/
//Part: 3 (var, Let, const)
// var nam = 'Raihan';
// console.log(nam);

// nam = 'fahim';
// console.log(nam);

// let nam = 'Raihan';
// console.log(nam);

// nam = 'fahim';
// console.log(nam);

// const nam = "Ehsan";
// nam_1 = 'Raihan'; // As const 'nam' is already used so we can not redeclare the 'nam' variable again.

// console.log(nam, nam_1);

//Part 4 (Data Types)
// //-------------------
// const nam = 'riahan ';
// console.log(typeof nam);

// const age = 131;
// console.log(typeof age);

// const car = null;
// console.log(typeof car);

// let test;
// console.log(typeof test);

// const sym = Symbol();
// console.log(typeof sym);

// const hobbies = ['Cycling', 'Traveling', 'hiking',  'dating...'];
// console.log(typeof hobbies);

// const tdate = new date();
// console.log(tdate);

// console.warn(typeof tdate);

// Part 5
// ------------
/*
const num1 = 34534;
const num2 = 23;
const num3 = 500;

let val ;

val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2 ;

// math objects
val = Math.PI;
val = Math.round(2.4);
val = Math.round(2.6);
val = Math.sqrt(342);
val = Math.pow(342);
val = Math.random();
console.log(val);

*/
 // Part 6 (String)
//  ---------------------
/*
const fname = 'Riahan';
const lname = 'sabuj';

let val;
//concatention
val = fname+ " "+lname;
//concat()
val = fname.concat(' ', lname);

//Append
var valflname = fname;
valflname += lname;
console.log(valflname);
 
val = 'this is back slash use of  inverted comma and it\' very important!'; // use of \ in between inverted comma ' .... \' ....'

//length 
let varlngth = val.length;
console.log(varlngth);

//change case
val = fname.toUpperCase();
console.log(val);

val = lname.toLowerCase();
console.log(val);

const str = 'this is back slash use of  inverted comma and it\' very important!'; // use of \ in between inverted comma ' .... \' ....'

//split
val = str.split(" ");
 console.log(val);

 const strComma = 'this, is back slash use, of  inverted, comma and it\' very important!'; 
val = strComma.split(",");
console.log(val);
*/

// Part 6 (Template String/ Template Literals)
// ...............................................
/*
const namel = "Raihan";
const age = "13";
const job = "Software Developer";
const city = "Dhaka";
//Template String
let html;

html =`
    <ul>
        <li>Name: ${namel}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
    </ul>
`
document.body.innerHTML = html;
*/

// Part 8 (If Else condition)
// ----------------------------

const id =100;
if(id==100){
    console.log("Correct!");
}else{
    console.log("InCorrect!");
}