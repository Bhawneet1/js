const accountId=144452
let accountEmail="Hello@gmail.com"
let accountState;
var accountPassword="123456"
accountCity="Jaipur"
// accountId=1;/*constant therefore give error therefore can't be changed
console.log(accountId);
accountEmail="hj@gmail.com"
accountPassword="8697950"
accountCity="Bangluru"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
// prefer not to use var due to issue of block scope and functional scope