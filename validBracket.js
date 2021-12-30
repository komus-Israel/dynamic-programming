function isValid(string, position, result={}) {

    let brackets = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }

    if (string.length % 2 != 0) {
        return false
    }
    
    
}


//console.log(isValid('()', 0))
//console.log(isValid('{}{}(){}{}', 0))
console.log(isValid('({{()}})', 0))