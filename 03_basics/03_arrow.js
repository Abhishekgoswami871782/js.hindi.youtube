const user = {
    username : "Abhishek",
    Price: 999,

    welcomeMessage: function() {
       // console.log(`${this.username}, welcome to website`);
       // console.log(this);
    }
}
// user. welcomeMessage() 
// user.username = "sam"
// user. welcomeMessage()


// console.log(this);

// function chai(){
//     let  username = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = function () {

//     let username = "hitesh "
//     console.log(this.username)
// }

// chai()

// const chai = () => {
//     let username = "Abhishek"
//     console.log(this.username)
// }
// chai()

//   const addTwo = (num1, num2) => {
//   return num1 + num2
//   }

//   console.log (addTwo(5,6))

        

// const  addtwo = (num1, num2) => num1 + num2
// console.log(addtwo(5,9))

//const addTwo = (num1, num2) => (num1 + num2 );


//object return karne ke liye 

const addTwo = (num1, num2) => ({username: "Abhishek"})      
console.log(addTwo(5,7))

