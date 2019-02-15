function bSearch(origArr, origVal){
    
    function binarySearch(arr, val){
        var beg = arr[0];
        var end = arr[arr.length-1];
        var mid = Math.floor(arr.length/2);

        if(arr.indexOf(val) === -1){
            return -1;
        }

        if(arr[mid] === val){
            return arr[mid];
        } else if(arr.indexOf(val) > mid){
            var newArr = arr.slice(mid, end);
            console.log('newArr', newArr);
            return binarySearch(newArr, val)
        }else if(arr.indexOf(val) < mid){
            var newArr = arr.slice(0, mid);
            return binarySearch(newArr, val);
        }else{
            return -1;
        }
        return found;

        console.log('beg', beg, 'mid', mid, 'end', end);
    }
    var result = binarySearch(origArr, origVal);
    return origArr.indexOf(result);
}

var item = bSearch([1,2,3,4,5], 7)
console.log('item ==>', item);