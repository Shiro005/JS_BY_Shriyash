// Promises in Javascript 

let Mypromise = new Promise(function (reslove, reject) {
    let steve = 78
    let tony = 80

    // why setTimeout is used 
    // async, singleThread
    setTimeout(function () {
        if (steve === tony) {
            reslove('Promise Done');
        }
        else {
            reject('Promise Rejected');
        }
    }, 2000)
})

// then
Mypromise
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})
// console.log(Mypromise)





