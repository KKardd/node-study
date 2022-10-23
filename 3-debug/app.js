function sayHello(){
    console.log('Hello!😁');
    console.log('kkardd!');
}

function calculator(x, y){
    const result = x + y;
    console.log('결과 : ', result);
    sayHello();
    return result;
}

calculator(1,2);

const stop = 4;
for(let i = 0; i < 10; i++){
    console.log('looping.......');
    console.log('count : ' , i);
    if(i === stop){
        break;
    }
}