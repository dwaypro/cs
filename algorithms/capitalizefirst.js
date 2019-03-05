/*
Write a recursive function called capitalizeFirst
Given an array of strings, capitalize the first letter 
of each string in the array. 
*/


// base case is length of the array.
// how do I capitalize only the first letter of a String?
// create a substring of length 1, call toUpperCase on it.
// recursively call capitalizeFirst after stringArray.pop() as argument.
function capitalizeFirst(stringArray){
    var capitalizedArray = [];
   (function cap(strArray){
        if(!strArray.length){
             return;
        }else{
            var newString = strArray[strArray.length - 1][0].toUpperCase() + strArray[strArray.length-1].slice(1);
            strArray[strArray.length-1] = newString;               
            capitalizedArray.unshift(strArray[strArray.length-1]);
            strArray.pop()
            return cap(strArray) 
        }
   })(stringArray);
   return capitalizedArray;              
}

capitalizeFirst(['car', 'taco', 'banana']);

//["Car", "Taco", "Banana"]