'use strict'

class Chef{
    constructor(food){
        this.food=food;
    }
    cook(){
        console.log(this.food);
    }
}
let cj=new Chef('appo');
cj.cook();