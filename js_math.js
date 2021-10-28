var eggPrice = 5;
var numberOfEggs = 12;
var totalCostOfEggs= eggPrice * numberOfEggs;

console.log("Total cost of Egg", totalCostOfEggs);
document.write(totalCostOfEggs);

//area of a circle calculator = pi * r square
var radius = 7;
const pi = 3.1415;
var areaOfCircle =  pi * (radius * radius)
console.log("Area of the circle is ", areaOfCircle, "sq inch");

//usd to bdt caclculator
var usdToBdt = 83.5;
var usd = 50;
var resultBDT = (usdToBdt * usd);
console.log("total taka- ", resultBDT, ".BDT");

// usages of %
var n1 = 122;
var n2= 3;
console.log("Division result- ", n1 / n2);
console.log("Reminder (%) of the result- ", n1 % n2);


var y;
var x = 199;
//x++; //x=x+1

//y = x++; //y=x; x=x+1;
//y = ++x; //y = x+1; x = x+1
y = --x;
//assignment operator

//x += 5;
//x -=30;
//x /=20;
x %= 7;
console.log("X = ",x, "Y = ", y);
