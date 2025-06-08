// const user = {
//     username: "khushi",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
        
//     }
// }

// user.welcomeMessage()
// user.username = "ankita"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Khushi"
//     console.log(this.username);    
// }
// chai()          // o/p undefined


// const chai= function(){
//     let username = "Khushi"
//     console.log(this.username);    
// }
// chai()   // o/p undefined


// const chai= {
//     username: "Khushi",
//     name: "treyqr",
//     address: "erqwerqwe",
//     user() {
//         console.log(this.username);
//         console.log(this.name);
//     },
//     addressUser() {
//         console.log(this.address);    
//     }

// };
// // chai.user();
// chai.addressUser();


// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4))


// const addTwo = (num1, num2) => num1+num2
// console.log(addTwo(3,4));

const addTwo = (num1, num2) => ({username: "khushi"})
console.log(addTwo(3,4));

