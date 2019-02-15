function binarySearch(arr,elem){
    var start = 0;
    var end = arr.length-1;
    var mid = Math.floor((start + end)/2);

    console.log('start', start, 'mid', mid, 'end', end);

    while(arr[mid] !== elem && start <= end){
        if(elem < arr[mid]) end = mid - 1;
        else start = mid + 1;
        mid = Math.floor((start + end) / 2);
    }   
    return arr[mid] === elem? mid : -1;       


}

binarySearch([2,5,6,9,13,15,28], 13);
