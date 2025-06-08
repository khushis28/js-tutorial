// const JsUser = {
//     name: "Khushi",
//     "full name": "Singh",
//     mySym: "mykey1",    //returns string type
//     age: 18,
//     location: "Lucknow",
//     email: "khushi@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday","Saturday"]
// }
// console.log(JsUser.email);
// console.log(JsUser["email"]);


// console.log(JsUser.mySym);

// const mySym = Symbol("key1");
// const JsUser = {
//     name: "Khushi",
//     "full name": "Singh",
//     // [mySym]: "mykey1",    
//     age: 18,
//     location: "Lucknow",
//     email: "khushi@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday","Saturday"]
// }

//  console.log(JsUser[mySym]);

// JsUser.email = "khushi28@gmail.com";
// Object.freeze(JsUser);
// JsUser.email = "khushivcs@gmail.com";
// console.log(JsUser);


// JsUser.greeting = function(){
//     console.log("Hello Js User");
// }

// JsUser.greetingTwo = function(){
//     console.log(`Hello Js User ${this.name}`);
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// const tinderUser = new Object();

// const tinderUser = {};
// tinderUser.id = "123abc"
// tinderUser.name = "Khushi"
// tinderUser.isLoggedIn = false
// console.log(tinderUser);


// const regularUser = {
//     email: "some@gmail.com",
//     fullname : {
//         userfullname: {
//             firstname: "khushi",
//             lastname: "singh"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);


// optional chaining
// const regularUser = {
//     email: "some@gmail.com",
//     fullname : ""
// }

// console.log(regularUser.fullname?.userfullname?.firstname);


//combining two objects
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1 , obj2}
// console.log(obj3);

// const target = {a: 1, b: 2};
// const source = {b: 4, c: 5};
// const returnedTarget = Object.assign(target, source);
// console.log(target);
// console.log(returnedTarget === source);


//spread operator in objects
// const returnedTarget = {...target, ...source}
// console.log(returnedTarget);

//when users come from database , their values will be in form of array of objects
// const users = [
//     {
//         id:1,
//         email: "h@gmail.com"
//     }
// ]

// users[1].email;

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// console.log(tinderUser.hasOwnProperty('isLogged'));

//object de-structuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "khushi"
}
console.log(course.courseInstructor);


const {courseInstructor} = course;
console.log(courseInstructor);


const {courseInstructor : Instructor} = course;
console.log(Instructor);

