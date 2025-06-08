// if(2=="2"){
//     console.log("executed");
// }


// if(4!=3){
//     console.log("executed");
// }


// const temperature = 51;
// if(temperature === 41){
//     console.log("less than 50");  
// }
// else{
//     console.log("temperature is greater than 50");    
// }
// console.log("executed"); //executes since out of loop


// const score = 200
// if(score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`)


// const balance = 600;
// if(balance < 500){
//     console.log("less than 500");
// } else if(balance<750){
//     console.log("less than 750");
// } else if(balance<900){
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }


// const userLoggedIn = true
// const debitCard = true
// if(userLoggedIn && debitCard){   //&& symbol checks for conditions as true
//     console.log("Allow to buy courses");   
// }


// const loggedInFromGoogle = false
// const loggedInFromEmail = true
// if(loggedInFromGoogle || loggedInFromEmail){          // ||(or) symbol checks for condition
//     console.log("User logged in"); 
// }


//truthy and falsy value

// falsy values -> false, 0, -0, BigInt, 0n, "", null, undefined, NaN

//truthy values -> "0", 'false', " ", [], {}, function(){}

// const userEmail = "khushi@gmail.com";  //truthy value
// if(userEmail){
//     console.log("Got user email");
// } else{
//     console.log("Don't have user email");
// }

// const userEmail = "";  //falsy value
// if(userEmail){
//     console.log("Got user email");
// } else{
//     console.log("Don't have user email");
// }


//to check empty array
// const userEmail = []
// if(userEmail.length===0){
//     console.log("Array is empty");    
// }

// //to check empty object
// const  emptyObj = {}
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }

//null coalescing operator (??) -> 2 keywords : null and undefined

// let val1;
// val1 = 5??10;
// console.log(val1);

// let val1;
// val1 = null??10;
// console.log(val1);


//ternary operator

//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");

