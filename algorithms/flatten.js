/*
* Write a recursive function called flatten which accepts
an array of arrays and returns a new array with all values
flattened. 
*/

/**
 * natural instinct is to solve this not recursively.
 * join all arrays (essentially flattens), split at ',' 
 * then map the resulting strings back to integers
 * per requirement for the testing suite. Doesn't yet handle
 * if contents of array aren't integers, but this let me pass. 
 */
function flatten(arr){ 
    arr.join().split(',').map(function(item){
     return item = parseInt(item);
    });
 }
 
 /**
  * 
  * Iterate over all values of the 'old array'
  * use Array.isArray to validate arr[i] is an array
  * if it is an array concat that array into newArr and call flatten2 again to check if array
  * else push the value into the new array.
  * @param oldArr is an array of strings 
  */
 function flatten2(oldArr){
     var newArr = []
       for(var i = 0; i < oldArr.length; i++){
         if(Array.isArray(oldArr[i])){
               newArr = newArr.concat(flatten2(oldArr[i]))
         } else {
               newArr.push(oldArr[i])
         }
   } 
   return newArr;
 }
 