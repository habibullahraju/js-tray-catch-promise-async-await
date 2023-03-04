const getData = new Promise((resolve,reject)=>{
    // resolve(555)
    const num = Math.random()*10;
    console.log(num);
    if (num < 5) {
        resolve(555)
    }
    else{
        reject('no data available!!')
    }
});
getData.then(data => console.log(data))
.catch(err => console.error('err:',err))
