//function sayMyName(){
// console.log("A");
// console.log("B");
// console.log("H");
// console.log("I");
// console.log("S");
// console.log("H");
// console.log("E");
// console.log("K");

//}

// sayMyName()

//function addTwoNumbers (number1, number2){
   // console.log(number1 + number2)
//}
//addTwoNumbers()
// addTwoNumbers(3, 4)
// //7
// addTwoNumbers(3,"4")
// //34
// addTwoNumbers(3,"a")
// //3a
// addTwoNumbers(3,null)
//3
//const result = addTwoNumbers(3,5)
//8


function addTwoNumbers(number1, number2){
let result = number1 + number2
return result
}

const result = addTwoNumbers(3, 5)
 
// console.log("Result: ", result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Abhishek"))
// //Abhishek just logged in
// console.log(loginUserMessage())
//undefined 

//prametar pass karne ke liye 

function calculateCartPrice(...num1){
   return num1
}
//console.log(calculateCartPrice(200,400,500,2000))


const user = {
   username: "hitesh",
   price: 199

}

function handleObject(anyObject){
   console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)




const myNewArray = [200,400,100,600]
function returnSecondValue (getArray){
   return getArray[1]

}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));

 
