## Day 7 notes ##
function numbercats(){
let num1 = prompt('How many cats do you know?');
let num2 = prompt('How many lives do cats have?');
let number1 = parseInt(num1);
let number2 = parseInt(num2);
let table = prompt('Do you want to Multiply, Divide, Add, or Subtract');
let response ='';
if(table === 'Multiply'){
  let sum = Mult(number1,number2);
  console.log(sum)
}else if(table === 'Divide'){
  let sum = Div(number1,number2);
  console.log(sum)
}else if(table === 'Add'){
  let sum = Add(number1,number2);
  console.log(sum)
}else if(table === 'Subtract'){
  let sum = Sub(number1,number2);
  console.log(sum)
}
else{
  console.log('Try again');
}
}
function Add(a,b){
  return a+b;
}
function Sub(a,b){
  return a-b;
}
function Div(a,b){
  return a/b;
}
function Mult(a,b){
  return a*b;
}
numbercats();