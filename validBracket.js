function isValid(string, position) {

    let brackets = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }

    // base case
    if (string.length === 0) {
        return true
    }
}

console.log(isValid('(){}()(){}))))))', 0))