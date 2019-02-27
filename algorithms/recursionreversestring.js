function reverse(string){
    var array = [];
    (function rev(str){
        if(!str) return;
        array.push(str[str.length-1])
        var newStr = str.split('');
        newStr.pop();
        rev(newStr.join(''));        
    })(string)        
    return array.join('');
}

reverse('awesome');