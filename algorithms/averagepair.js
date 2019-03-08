/*
Write a function called averagePair. Given a sorted array
of integers and a target average, determine if there is a pair
of values in the array where the average pair of the pair equals
the target average. There may be more than one pair that matches the average
target.
*/// 

/**
 * Helper function, that returns the average of two values passed in.
 * @param {first integer to be averaged} val1 
 * @param {*second integer to be averaged} val2 
 */
function average(val1, val2){
    return (val1 + val2) / 2; 
}

/**
 * Using the 'Multiple Pointer' approach, Returns true if any pair in a given array maches the target average.
 * Time complexity o(N);
 * @param arr the sorted array where the pairs are checked.
 * @param target the target average.
 */
function averagePair(arr, target){
    let start = 0;
    let end = arr.length-1;
    
    while(start < end){
       let averageVal = average(arr[start], arr[end]);
       if(averageVal === target){
           return true;
       }else if (averageVal > target){
         end--
       }else if (averageVal < target){
         start++   
       }       
    }
    return false;   
}