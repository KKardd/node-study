function hello() {
    console.log(this === global);
}

hello();

class A{
    constructor(num){
        this.num = num;
    }
    memberfuction(){
        console.log('-----------class------------');
        console.log(this);
        console.log(this === global);
    }
}
const a = new A(1);
a.memberfuction();

console.log('-------global scope--------');
console.log(this === module.exports);

//브라우저에서는 this는 global, node에서 this는 module