let p1 = new Promise( (resolve,reject) => {
    setTimeout( () => {
        resolve("5 seconds Time Called");
    },5000);
})

let p2 = new Promise( (resolve,reject) => {
    setTimeout( () => {
        resolve("10 seconds Time Called");
    },10000);
})

let finalPromise = Promise.all([p1,p2]).then( (data) => {
    console.log(data);
})