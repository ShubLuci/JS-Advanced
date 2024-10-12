// API for fetching data based off on user name;
let baseUrl = 'https://api.genderize.io'

let name = "shubham"

let finalURL = baseUrl + '?name=' + name;

async function handleApi() {
    try {
        let data = await fetch(finalURL);

        // Data in Readable Stream. Convert it to JSON
        let response = await data.json(); 
        console.table(response);
    } catch (error) {
        console.log("Error has occured = "+error.message);
    }
}

handleApi();