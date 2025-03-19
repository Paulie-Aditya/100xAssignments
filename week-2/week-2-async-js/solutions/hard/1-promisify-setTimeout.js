function setTimeoutPromisified(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, ms);
    })
}


function wait(n){
    return setTimeoutPromisified(n);
}