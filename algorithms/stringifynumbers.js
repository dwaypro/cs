/*
Write a recursive function called stringify Numbers
Return a copy of an object where the integers are strings
which may contain nested objects.
*/

/**
 * if integer return true
 * @param {*} int 
 */
function isInteger(int){
    if(Number.isInteger(int)){  
      return true
    }else{
        return false;
    }
  };

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
   * converts a given integer to string
   * @param {*} integer 
   */
  function stringifyNumber(integer){
      return integer.toString();
  }
  
   
  /**
   * Attempts to iterate over all fields for a given object.
   * if an integer is found convert to string.
   * if another object is found call findIntegers again recursively. 
   * @param {*} obj obj for which all even integers will be summed
   */
  function stringifyNumbers(obj){
      console.log('obj', obj);
      var newObj = Object.assign({}, obj);
      (function findIntegers(newObj){
          
          for(var key in newObj){
              if(isInteger(newObj[key])) newObj[key] = stringifyNumber(newObj[key]);
              if(isobj(newObj[key])) findIntegers(newObj[key]);
          }
      })(newObj)
  
      return newObj;
  }
