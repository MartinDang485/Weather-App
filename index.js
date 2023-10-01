
let city = "Canada"; //replace with textContent

fetch('http://api.weatherapi.com/v1/current.json?key=23c5cd760af54f9e864215602233009&q=' + city + '@aqi=no')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        let Country = data.location.country;
        console.log(Country);
    })


