// aray 

const myArr = [ 1,2,3,4,5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4,)
//console.log(myArr);


//*************/ Array Methods /****************//

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr. unshift(9)
// myArr.shift()


//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));

// const newArr = myArr.join()


// console.log(myArr);
// console.log(newArr);

console.log("A ", myArr); //[1,2,3,4,5]
 

const myn1 = myArr.slice(1, 3)

console.log(myn1);//[2,3]
console.log("B ", myArr);//[1,2,3,4,5]

const myn2 = myArr.splice(1, 3)
console.log("c", myArr);//[1,5]
console.log(myn2);//[2,3,4]