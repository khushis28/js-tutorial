// let a =document.getElementsByClassName("container")[0]
// a.onclick = ()=> {
//     let b=document.getElementsByClassName("container")[0]
//     b.innerHTML="Hello World!"
// }

let promise = new Promise(function(resolve,reject){
    alert("Hello")
    resolve(56)
})

console.log("Hello One");
setTimeout(function(){
    console.log("Hello Two in 2 seconds")
},2000)

console.log("My name is "+ "Hello Three")
console.log(promise);


