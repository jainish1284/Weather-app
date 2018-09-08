// const request = require('request');
// const yargs = require('yargs');
// const geocode = require('./Geocode/geocode');

// const argv = yargs
//         .options({
//             a: {
//                 demand: true,
//                 alias: 'address',
//                 describe: 'This is Address',
//                 string: true
//             }
//         })
//         .argv;

// geocode.exportGeo(argv.a, (errorMessage, results) => {
//     if(errorMessage) {
//         console.log(errorMessage);
//     }
//     else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

const request = require('request');

request({
        url: 'https://api.darksky.net/forecast/1da530fcfab55ecb4447a943c3277265/37.8267,-122.4233',
        json: true
    },(error, request, body) => {
        var data = body.currently;
});