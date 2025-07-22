const accountID = 3301;
let accountEmail = "abc@gmail.com";
var accountPassword = "12345"; // ! dont't use
accountCity = "Dhaka";
let accountState;


// accountID = 2; // ! not allowed
accountEmail = "def@gmail.com";
accountPassword = 96777;
accountCity = "Khulna";
/*
! Prefer not to use var because of issue in block scope and functional scope
*/
console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);
