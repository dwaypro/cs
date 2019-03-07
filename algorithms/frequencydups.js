/**
 * Implement a function called, areThereDuplicates which accepts
 * a variable number of arguments, and checks whether there are any 
 * duplicates among the arguments passed in.
 */
function areThereDuplicates(){
    var args = Array.from(arguments);     
    var frequencyObject = {};
    for(var i = 0 ; i < args.length; i++){
        if(frequencyObject[args[i]]){
            return true;
        }else{            
            frequencyObject[args[i]] = 1;
        } 
    }
    return false;

}