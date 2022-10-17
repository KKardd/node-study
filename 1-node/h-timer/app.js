let num = 1;

const interval = setInterval(() => {
    console.log(num);
    num++;
}, 1000);

setTimeout(()=> {
    console.log('Time out!');
    clearInterval(interval);
}, 6000);