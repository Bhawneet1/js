//Multiple functions in sequence
//callback Hell
//promise intially in pending state
//resolve with value
//reject with reason

let promise=new Promise((resolve,reject)=>{
    if(result())
    {
        resolve('Success');
    }
    else
    {
        reject('Error');
    }
});

//then()handle fulfilment
//catch()handle rejection
//finally()

promise.then(value=>{
    console.log(value);//success

});
//handling rejections
promise.catch(error=>{
    console.log(error);
    
})
promise.finally(()=>{
    console.log('Operation Completed');
    
})


