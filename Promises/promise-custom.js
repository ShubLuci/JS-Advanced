// Promise Constructor
let p = new Promise( (resolve,reject) => {
    setTimeout( () => {
        resolve("Resolved -> Timer Expired in 5 seconds");
    },5000);
    setTimeout( () => {
        reject("Rejected -> Timer Expired in 10 seconds");
    },10000);
});


// Handle resolve with then() and reject with catch()
p.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})