const accountId = 144553
let accountEmail = "Nicky@Gmail.com"
var accountPassword = "123456"
accountCity = "jaipur"
let accountState;

//accountId = 2 //not allowed


accountEmail = "Abhi@gmail.com"
accountPassword = "202021"
accountCity = "Bengaluru"

/* 
Prefer not to use ver 
because of issue in block and functional scope 
*/ 
console.log(accountId);

console.table([accountId, accountEmail, accountPassword,accountCity,accountState]);

