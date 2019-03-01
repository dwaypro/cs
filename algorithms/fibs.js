/*
    Time complexity O(N)
*/

function fib(n, memo=[]){
    if(memo[n] !== undefined) return memo[n]
    if(n <= 2) return 1;
    
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}


/*
    Time complexity 2^N
*/

function fibReg(n){
    if(n <= 2) return 1;
    return fibReg(n-1) + fibReg(n-2);
}



/*
    Time complexity O(N)
*/

function fibIter(n){
    var i;
    var fib = [0, 1]; 
    for (i = 2; i <= n; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[fib.length-1];
}
