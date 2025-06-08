// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date (2023, 0, 23);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023,0,23,5,3);
// console.log(myCreatedDate.toLocaleDateString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// let myCreatedDate = new Date("2023-01-14");     //in YYYY-MM-DD format
// console.log(myCreatedDate.toLocaleDateString());

// let myCreatedDate = new Date("01-14-2023");      // in DD-MM-YYYY
// console.log(myCreatedDate.toLocaleDateString());

// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

let newDate = new Date();

let dayName = newDate.toLocaleString('default', {
    weekday: 'long'
});

console.log(dayName);