const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
            json: true,
        },(error,response,body) => {
            if(error) {
                reject('Unable To connect Google');
            }
            else if(body.status === 'ZERO_RESULTS'){
                reject('No Location Found');
            }
            else if(body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('380015').then(
    (success) => {
        console.log(JSON.stringify(success, undefined, 2));
    },
    (error) => {
        console.log(error);
    }
);