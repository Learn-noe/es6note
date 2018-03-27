'use strict'

class Chef{
    constructor(food){
        this.food=food;
        this.dish=[];
    }

    get menu(){
        return this.dish;
    }
    set menu(dish){
        this.dish.push(dish);
    }
    cook(){
        console.log(this.food);
    }
}
let cj=new Chef('appo');
console.log(cj.menu='');
console.log(cj.menu='');
console.log(cj.menu='');
cj.cook();