const request = require('request');

var exportWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/1da530fcfab55ecb4447a943c3277265/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log('Unable to connect forecast.io');
        }
        else if (response.statusCode == 400) {
            console.log('Unable to find weather');
        }
        else if (response.statusCode == 200) {
            var data = body.currently.temperature;
            cel = (data - 32) * (5/9);
            callback(undefined, {
                cel: cel
            });
        }
    });
}

module.exports.exportWeather = exportWeather;