// <- Stack ->

/* let myPlaylist="khushiPlaylist";
let anotherPlaylist= myPlaylist;
anotherPlaylist = "chai aur code";
console.log(myPlaylist); 
console.log(anotherPlaylist); */


// <- Heap -> 

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
} 

let userTwo = userOne
userTwo.email = "khushi28@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);

