const request = require('request');
const yargs = require('yargs');
const geocode = require('./Geocode/geocode');
const weather = require('./Weather/weather');

const argv = yargs
        .options({
            a: {
                demand: true,
                alias: 'address',
                describe: 'This is Address',
                string: true
            }
        })
        .argv;

geocode.exportGeo(argv.a, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    }
    else {
        // console.log(JSON.stringify(results, undefined, 2));
        weather.exportWeather(results.latitude, results.longitude, (error, weatherData) => {
            if(error) {
                console.log(error);
            }
            else {
                // console.log(JSON.stringify(weatherData, undefined, 2));
                console.log(`Current Temperature of ${results.address} is ${weatherData.cel}`);
            }
        });
    }
});
