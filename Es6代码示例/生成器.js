'use strict'

let =chef=function* (foods){
    for(var i=0;i<foods.length;i++){
        yield foods[i];
    }
}
let cj=chef('coffee','appo');
