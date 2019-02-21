//Radix sort is a sorting algorithm that doesn't make direct
// comparisons. Radix sort is a special sorting algorithm that 
// works on lists of numbers. 

// it exploits the fact that information about the size of a numbers
// is encodeed in the number of digits.
// more digits means bigger number!

getDigit = function(num,place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) %10;
} 

digitCount = function(num){
    if(num === 0 ) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +1;
}

mostDigits = function(nums){
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}


function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0 ; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i <nums.length; i++){
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
      }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

//controversial, might not actually be the case due to how
// numbers are actually stored in memory. could be O(n log n)

// Time complexity(best)
// O(nk)
//Time complexity average
//O(nk)
//Time Complexity worst
// O(nk)
// SpaceComplexity
// O(n + k)