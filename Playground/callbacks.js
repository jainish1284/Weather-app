/*
    function getUser(id,callback)
    {
        var user = {
            id: id,
            name: "Jainish"
        };
        callback(user);
    };

    getUser(31, function fun(userObject){
        console.log(userObject);
    });
*/

var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Jainish'
    };
    callback(user);
};

getUser(31, (userObject) => {
    console.log(userObject);
});