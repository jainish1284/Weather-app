const yargs = require('yargs');
const axios = require('axios');

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

var encodeAddress = encodeURIComponent(argv.a);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;

axios.get(geocodeUrl).then(
    (response) => {
        if(response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unabel to fetch Address');
        }
        console.log(response.data);
        var latitude = response.data.results[0].geometry.location.lat;
        var longitude = response.data.results[0].geometry.location.lng;
        var weatherUrl = `https://api.darksky.net/forecast/1da530fcfab55ecb4447a943c3277265/${latitude},${longitude}`;
        return axios.get(weatherUrl);
    }
).then(
    (response) => {
        console.log(response.data.currently.temperature);
    }
).catch(
    (errorMessage) => {
        if(errorMessage.code === 'ENOTFOUND') {
            console.log('Unable to Connect');
        }
        else {
            console.log(errorMessage.message);
        }
    }
);
