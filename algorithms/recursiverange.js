
/*
    Write a function called recursiveRange which accepts a number
    and adds up all the numbers from 0 to the number passed to the function.
*/

function recursiveRange(n){
    return (function add(x, total){
        if(x===0) return total;    
        return add(x-1, total+x)     
    })(n, 0)
}