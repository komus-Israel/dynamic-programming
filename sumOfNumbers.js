function sum(number, memo={}) {
    if(number <= 1) {
        return number
    }

    if (number in memo) {
        return memo[number]
    }

    memo[number] = number + sum(number - 1, memo)
    return memo[number]
}

console.log(sum(10000)) //5050
console.log(sum(50)) // 1275
