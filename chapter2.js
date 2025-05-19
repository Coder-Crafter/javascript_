
             //conditional statements


//create a variable of datatype string and perform addition
{
  let a = 10,
    b = 20;
  const d = 23;
  c = a + b;
  console.log(c);
  console.log(typeof a, typeof b, typeof c);
  //d=a+b; we can't reassign the value of a constant variable.
}
//d=a+b; we can't reassign the value of a constant variable.
let age = 15; // You can change this value to test different ages
if (age >= 10 && age <= 20) {
  console.log("The age is between 10 and 20.");
} else {
  console.log("The age is not between 10 and 20.");
}

//either a number is divisible by 2 and 3

function checkDivisibility(number) {
  console.log("Entered number:", number);
  if (number % 2 === 0 && number % 3 === 0) {
    console.log("It is divisible by 2 and 3");
  } 
  else {
    console.log("It is not divisible by 2 and 3");
  }
}


//weather a num is divisible by either 2 or 3.
{
  let num = 10;
  if (num % 2 == 0 || num % 3 == 1) {
    console.log("num is divisible by either 2 or 3");
  } else {
    console.log("num is not divisible by either of them");
  }
}
//using ternary operator to print you can or cannot print according to age grrater then or less then 18
{let age = 20;
console.log(age > 18 ? "You can drive" : "You cannot drive");
}