'use strict'

function chef(){
    let i=0;

    return{
        next(){
            let done=(i>=foods.length);
            let values=!done?foods[i++]:undefined;
            return{
                values:velue,
                done:done
            }
        }
        
    }
}
let cj=chef(['xihongshi','jidan']);
console.log(cj.next());
console.log(cj.next());
console.log(cj.next());
