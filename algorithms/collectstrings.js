/**
 * Write a function called collectStrings which accepts
 * an object and returns an array of all the values in 
 * the object that have a typeof string  
 */

/**
 * returns true if typeof item is object 
 * @param {*} item 
 */
function isobj(item){
    if(typeof(item) === 'object'){
        return true;
    }else{
        return false;
    }
}

/**
 * returns true if typeof item is string 
 * @param {*} item 
 */
function isString(val){
    if(typeof(val) === 'string'){
        return true;
    }else{
        return false;
    }
}


/**
 * Attempts to iterate over all fields for a given object.
 * if a string is found push the string into a collection of strings.
 * if another object is found call findStrings again recursively. 
 * @param {*} obj obj for which all strings will be collected
 */
function collectStrings(obj){
    console.log('obj', obj);
    var strings = [];
    (function findStrings(newObj){      
        for(var key in newObj){
            if(isString(newObj[key])) strings.push(newObj[key]);
            if(isobj(newObj[key])) findStrings(newObj[key]);
        }
    })(obj)

    return strings;
}