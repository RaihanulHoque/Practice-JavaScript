<script>

var n =-12;
if(n>0){
    var result = "This number "+n+" is positive";
}else{
    var  result = "This number "+n+" is negative";
}
//console.log(result);

//checking a number even or odd
var n1 = 15;
var result2;

if(0 == n1){
    result2 = "This is a nutral number";
}else if (0 == n1 % 2){
    result2 = "The number "+n1+" is an even number";
}else{
    result2 = "The number "+n1+" is an odd number";
}
//console.log(result2);

var movieRating = "r";
var age =10;
//rating = pg, r, 13, g;
/*
if("pg" == movieRating && age>=13){
	console.log("You can watch this movie");
}else if("r" == movieRating && age>=18){
	console.log("You can watch this movie");
}else if("r" == movieRating){
	console.log("You can watch this movie");
}else{
	console.log("You can not watch this movie");
}
*/

if(("pg" == movieRating && age>=13) || ("r" == movieRating && age>=18)||("r" == movieRating)){
    console.log("You can watch this movie");
}else{
    console.log("You can not watch this movie");
}

//Age Category Finding...
var yourAge = 33;
var result;
if(yourAge < 0 || yourAge > 200 ){
    result = "Vampare :(";
}else if(yourAge <= 1){
    result = "baby";
}else if(yourAge <= 3){
    result = "Toddler";
}else if(yourAge <= 12){
    result = "kid";
}else if(yourAge < 18){
    result = "Teenager";
}else if(yourAge >= 18){
    result = "Adult";
}
console.log("You are a", result);

</script>
