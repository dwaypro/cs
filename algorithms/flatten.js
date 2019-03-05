function flatten(arr){ 
    array2.join().split(',').map(function(item){
     return item = parseInt(item);
 });
 
 }
 
 
 function flatten2(arr){
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
 