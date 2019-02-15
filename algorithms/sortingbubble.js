// the important concept is swapping
// compare and swap
// we can reduce the number of times we compare as we
// sort

function swap(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
};

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};



function bubbleSort(arr){
    var noSwaps; //optimization
    for(var i = arr.length; i > 0; i--){
        noSwaps = true;
        for(var j = 0; j < i-1; j++){
            console.log('arr', arr);
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }   
        if(noSwaps) break;
    }
    return arr;
}


// bubbleSort([37,45,29,8])

bubbleSort([1,2,3,8,4,5,6])