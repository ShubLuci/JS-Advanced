// Promise for Public Web API's


// API for fetching data based off on user name;
let baseUrl = 'https://api.genderize.io'

let name = 'shubham'

let finalURL = baseUrl + '?name=' + name;

let p1 = fetch(finalURL);

p1.then((data) => {
    // Data is in Readable Stream format. Convert it using .json() method.
    // return data so that the next chain will have the data.
    return data.json();
}).then((processedData) => {
    console.table(processedData);
}).catch((error) => {
    console.log("Error Occured = "+error);
}).finally(() => {
    console.log("CleanUp the Code");
})