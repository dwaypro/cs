/**
 * Implement a function called, areThereDuplicates which accepts
 * a variable number of arguments, and checks whether there are any 
 * duplicates among the arguments passed in.
 */

 //my implementation, using the frequency counter approach.
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


/**
 * alternative solutions:
 */
// one liner kinda pretty:
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

//multiple pointers:
function areThereDuplicates(...args) {
    // ewww:
    args.sort((a,b) => a > b);
    // end eww

    //'pointer' 1
    let start = 0;
    //'pointer' 2
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }
