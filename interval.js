console.log(1);
console.log(2);
let num= 0;
const raju =setInterval(() => {
    // console.log(new Date());
    console.log(++num);
    if (num === 10) {
        clearInterval(raju)
    }
}, 1000);
console.log(3);
console.log(4);
console.log(5);