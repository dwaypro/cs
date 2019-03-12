/**
 * Write a function called isSubsequence which takes in two strings
 * and checks whether the characters in the first string form a subsequence of the characters
 * in the second string. In other words, the function should check whether the chartcters in the 
 * first string appear somewhere in the second string, without their order changing.
 * 
 * Your solution MUST have AT LEAST the following complexities:
 * 
 * Time Complexity - O(N+M);
 * Space Complexity - O(1);
 */


 /**
  * Original attempt, iterate over str2.length * 2. This gives enough 'room' for str1Pointer to catch up.
  * Not ideal, but keeps the time complexity to O(2N) by avoiding a nested loop. 
  * 
  * if str1Pointer === str2Pointer push the found element into foundStr
  * else increment str2Pointer. 
  */
function isSubsequence(str1, str2){
    var str1Pointer = 0;
    var str2Pointer = 0;
    
    var foundStr = [];
    for(var i = 0; i < str2.length*2; i++){         
        if(str1[str1Pointer] === str2[str2Pointer] && str1Pointer < str1.length){
            foundStr.push(str1[str1Pointer]);
            str1Pointer++; 
        }else{
            str2Pointer++;
        }              
    }
    return foundStr.join("") === str1;
}

isSubsequence('hello', 'hello world');// true
isSubsequence('sing', 'sting'); //true
isSubsequence('abc', 'abracadabra');//true
isSubsequence('abc', 'acb'); //false


//Better solution
function isSubsequence2(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }