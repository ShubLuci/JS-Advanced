const url = "https://api.genderize.io?name=peter";

let data = fetch( 
    url, 
    {
        method: 'GET',
        headers: {
            "Authorization": "Shubham123"
        }
    }
);

const response = data.then((finalData) => {
    return finalData.json();
}).then((finalData) => {
    console.log(finalData);
}).catch((err) => {
    console.log(err);
});

console.log(response);