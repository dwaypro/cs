function isPalindrome(str){
    var modStr = str.split('').reverse().join('');
    return str === modStr;
}

isPalindrome('tacocat');

//true