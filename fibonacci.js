function fib(n, memo={}) {
    if (n <=2 ) {
        return 1
    }

    if (n in memo) {
        return memo[n]
    }

    result = fib(n-1, memo) + fib(n-2, memo)
    memo[n] = result
    return memo[n]
}

console.log(fib(50))