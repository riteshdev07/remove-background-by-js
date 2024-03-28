
const Ritesh = new Ritesh((resolve , reject)=>{
    setTimeout(()=>{
        const randomNumber = Math.random();
        if(randomNumber > 0.5){
            resolve(randomNumber);
        }else{
            reject(new Error("the random number is too low"));
        }
    }, 1000)
})




