// singletorn 


//const tinderUser = new Object()

 const tinderUser = {}

 tinderUser.id = "123abc"
  tinderUser.name = "Sammy"
  tinderUser.isLOggedIn = false

//console.log(tinderUser)

//const regularUser = {

//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "chouhan"
//         }

//     }
// }
//console.log(regularUser.fullname)

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"} 

//const obj3 = {obj1, obj2}
//ans-{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3 = Object.assign( obj1, obj2)
//ans-{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//const obj3 = Object.assign({}, obj1, obj2)
//ans-{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// const obj3 = {...obj1,...obj2}
// console.log(obj3);


// const users = [
// {
//     id: 1
//     email: "h@gmail.com"
// },
// {
//     id: 2
//     email: "h@gmail.com"
// },
// {
//     id: 3
//     email: "h@gmail.com"
// },
// {
//     id: 4
//     email: "h@gmail.com"
// },
// {
//     id: 5
//     email: "h@gmail.com"
// },
// ]

//users[1].email
//console.log(tinderUser);
//ans-{ id: '123abc', name: 'Sammy', isLOggedIn: false }
//console.log(Object.keys(tinderUser));
//ans-[ 'id', 'name', 'isLOggedIn' ]
//console.log(Object.values(tinderUser));
//ans-[ '123abc', 'Sammy', false ]
//console.log(Object.entries(tinderUser));
//ans-[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLOggedIn', false ] ]

//console.log(tinderUser.hasOwnProperty('isLOggedIn'));
//ans-true


//*************Objecgs.3 thrd class*************** */


const courese = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
}

//courese.courseInstructor


const { courseInstructor: instructor} = courese
//console.log(courseInstructor);
console.log(instructor);

// {
//   "name": "hitesh",
//   "coursename"; "js in hindi",   // json parts
//   "price": "free"

// }

//API =>https://api.github.com/users/hiteshchoudhary

[
     {},
     {},
     {},
]

