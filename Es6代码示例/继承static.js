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
    static cook(){
        console.log(food);
    }
}
Chef.cook('xihongshi');