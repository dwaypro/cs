// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, cb){
    if(!arr.length) return cb(arr);
        var item = arr[arr.length-1]     
    if(cb(item) === true){
        return true;   
    }else{
        arr.pop()
        return someRecursive(arr, cb)
    }
}