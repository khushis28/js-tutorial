// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(3,5);


// function addTwoNumbers(number1, number2){
//     return number1 + number2
// }
// const result = addTwoNumbers(3,5);
// console.log("Result: ", result);


// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("khushi"));  // o/p - khushi just logged in
// console.log(loginUserMessage(""))         // o/p - just logged in
// console.log(loginUserMessage());          // o/p undefined just logged in


// function loginUserMessage(username){
//     if(username=== undefined){
//         console.log("Please enter a username:");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());


// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username:");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());


// function loginUserMessage(username="khushi"){
//     if(!username){
//         console.log("Please enter a username:");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());


// function loginUserMessage(username="khushi"){
//     if(!username){
//         console.log("Please enter a username:");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("khushi"));


// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,400,500,2000));


// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,400,500,2000));


// const user = {
//     username: "khushi",
//     price: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject({
//     username: "ankita",
//     price: 299
// })


//to pass array datatype
const myNewArray = [200,400,100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,500,1000]));


