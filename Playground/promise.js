// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('Hey ! It Worked...');
//         // reject('Hey ! It Didnt workout');
//     },2000);
// });

// somePromise.then((message) => {
//     console.log('Success',message);
// },(errorMessage) => {
//     console.log('Error',errorMessage);
// });

var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }
            else {
                reject('Both Must Be Numbers');
            }
        },1500);
    });
};

// asyncAdd(5,5).then(
//     (success) => {
//         console.log('First Call : '+ success);
//         return asyncAdd(success, 5);
//     },
//     (error) => {
//         console.log(error);
//     }
// ).then(
//     (success) => {
//         console.log('Second Call : '+ success);
//     },
//     (error) => {
//         console.log(error);
//     }
// );

asyncAdd(5,5).then(
    (result) => {
        console.log(result);
        return asyncAdd(result,'5');
    } 
).then(
    (result) => {
        console.log(result);
    }
).catch(
    (errorMessage) => {
        console.log(errorMessage);
    }
);