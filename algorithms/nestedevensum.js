/*
Write a recursive function called nestedEvenSum
Return the sum of all even numbers in an object
which may contain nested objects.
*/

/**
 * iseven to determine if an integer and even
 * @param int integer hopeful
 */
function iseven(int){
    if(Number.isInteger(int)){  
      if(int % 2 === 0 ) return true;
      if(int % 2 === 1) return false;
    }else{
        return false;
    }
  };
  
/**
 * isobj used to determine if item is an object
 * @param item object hopeful. 
 */
  function isobj(item){
   if(typeof(item) === 'object'){
       return true;
   }else{
       return false;
   }
  }
  
  /**
   * nestedEvenSum attempts to iterate over all fields of keys.
   * if an integer is found add to the sum, that is eventually returned.
   * if another object is found call addKeys again recursively. 
   * @param {*} obj obj for which all even integers will be summed
   */
  function nestedEvenSum(obj){
      console.log('obj', obj);
      var sum = 0;
      (function addKeys(obj){
          
          for(var key in obj){
              if(iseven(obj[key])) sum += obj[key];
              if(isobj(obj[key])) addKeys(obj[key]);
          }
      })(obj)
      return sum;
  }
  
  
//   var obj1 = {
//     outer: 2,
//     obj: {
//       inner: 2,
//       otherObj: {
//         superInner: 2,
//         notANumber: true,
//         alsoNotANumber: "yup"
//       }
//     }
//   }
  
//   var obj2 = {
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'},
//   };

//   nestedEvenSum(obj1); // 6
  // nestedEvenSum(obj2); // 10
 