// setTimeout(() => {
//     console.log("Hacking wifi....Please wait...");
// }, 1000);

// try{
//     setTimeout(() => {
//         try{
//             console.log(rahul);
//         } catch(error){

//         }    
//     }, 100);
   
// } catch(error){
//     console.log("Balle Balle"); 
// }


// setTimeout(() => {
//     console.log("Fetching username and password ....Please wait...");
// }, 2000);

// setTimeout(() => {
//     console.log("Hacking Rahul's facebook id.....Please wait...");
// }, 3000);

// setTimeout(() => {
//     console.log("Username and password of Rahul (+918648415154) fetched....Please wait....");
// }, 4000);


//finally

// try{
//     let a =0;
//     console.log(program);
//     console.log("Program ran successfully");
// }
// catch(err){
//     console.log("This is an error");
//     console.log(p);
// }
 
// finally{
//     console.log("I am a good boy");
// }

//another finally example
const f= ()=>{
    try{
        let a =0 ;
        console.log("Program ran successfully");
        return   
    }
    catch(err){
        console.log("This is an error");
        console.log(p);         
    }
    finally{
        console.log("I am a good boy");
    }
}
f()