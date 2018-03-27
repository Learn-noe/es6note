'use strict'
//错误
if(true){
    let fruit="appo";
}
console.log(fruit);

//正确

{
    //块级申明
    let fruit="appo";
}
console.log(friut);

//const 恒量

//解构赋值 结构对象
function breakfast(){
    return ['appo','coffe','tea'];
}
let [dessert,drink,friut]=breakfast();
let {dessert:dessert,drink:drink,friut:friut}
console.log(dessert,drink,friut)

let {dessert:dessert,drink:drink,friut:friut}


//模板字符串
let dessert="dangao";
    drink="water";
let breakfast= eat`今天早上吃 \n
    ${dessert}与${drink} !`;
function eat(string,...values){
    // console.log(string);
    // console.log(values);
    let result='';
    for(var i=0;i<values.length;i++){
        result+=string[i];
        result+=values[i];
    }
    result+=strings[strings.length-1];
    return result;

}

console.log(breakfast);

function eat(dessert,drink,{location,restauran}={}){
    console.log(dessert,drink,location,restauran)
}
eat('break','water',{location:'北京',restauran})