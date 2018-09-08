const request = require('request');
var exportGeo = (address, callback) => {
    
    var encodeAddress = encodeURIComponent(address);
    
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
        json: true
    },(error,response,body)=>{
        if(error){
            callback('Unable To Connect To Google Server');
        }
        else if(body.status === 'ZERO_RESULTS'){
            callback('Unable To Find Address');
        }
        else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
}

module.exports.exportGeo = exportGeo;