'use strict'

class Person{
    constructor(name,birthday){
        this.name=name;
        this.birthday=birthday;
    }
    intro(){
        return `${this.name},${this.birthday}`;
    }
}
class Chef extends Person{
    constructor(name,birthday){
        super(name,birthday);
    }
}
let cj=new Chef('cj','1992-12-28');
console.log(cj.intro());