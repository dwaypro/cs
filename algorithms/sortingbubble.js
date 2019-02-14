// the important concept is swapping
// compare and swap
// we can reduce the number of times we compare as we
// sort

function swap(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}