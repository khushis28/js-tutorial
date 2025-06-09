let p=fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((value1)=> {
    return value1.json()
}).then((value2)=>{
    console.log(value2);
})


// let p=fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((response)=> {
    // console.log(response.status);
    // console.log(response.ok);
    // return response.json()
// }).then((value2)=>{
//     console.log(value2);
// })