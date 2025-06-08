//for each() method

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item  
// })
// console.log(values);

// const newNums = []
// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


//filter() method

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) => {
//     return num>4
// })
// console.log(newNums);


//using for-each and filter method together

// const newNums = []
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);



const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
]

// const userBook = books.filter( (bk) => bk.genre === 'History')
// console.log(userBook);

// You are using the .filter() method to create a new array that contains only the books with genre "History".

// ✅ Step-by-step meaning:
// books
// → This is your original array of book objects.

// .filter(...)
// → This goes through each book in the array and checks a condition.

// (bk) => bk.genre === 'History'
// → This is a function that takes a book (named bk) and checks:

// "Is the genre of this book equal to 'History'?"

// userBook = ...
// → You store the result (the filtered books) into a new variable called userBook.

// let userBook = books.filter((bk) => bk.genre === 'History')
// userBook = books.filter((bk) => {
//     return bk.publish >=2000})
//     console.log(userBook);


// userBook = books.filter((bk) => {
//     return bk.publish >=1995 && bk.genre === "History"
// })
//     console.log(userBook);


// const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbers.map((num) => {
//     return num+10
// })
// console.log(newNums);


// const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbers
//                 .map((num)=> num*10)
//                 .map((num) => num+1)
//                 .filter((num) => num >=40)
// console.log(newNums);


const myNums = [1,2,3]
const myTotal = myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
}, 0)

// const myTotal = myNums.reduce((acc,curr) => acc+curr, 0)
console.log(myTotal);


//using throw function by map()
const shoppingCart = [
    {
    itemName: "js course",
    price: 999
    },
     {itemName: "mobile dev course",
    price: 2999
    }, 
    {itemName: "data science course",
    price: 12999
    },
    {
    itemName: "py course",
    price: 1299
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc+item.price, 0)
console.log(priceToPay);
