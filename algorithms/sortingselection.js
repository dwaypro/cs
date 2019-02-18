//store the first element as the smallest value seen so far
// compare this item to the next item in the array until 
// you find a smaller number.
// if the minimum is not the value you initially began with,
// swap the two values. 
// repeat this with the next element until the array is sorted


function selectionSort(arr){
    for(var i = 0; i < arr.length; i ++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            console.log('i,j', i, j );
            if(arr[j] < arr[lowest]){
                lowest = j;
            }else{                 
            }
        }
        console.log('********************')
        console.log('arr', arr)
        console.log('swapping :')
        if( i !== lowest){
             var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}


selectionSort([34,22,10,19,17]);
