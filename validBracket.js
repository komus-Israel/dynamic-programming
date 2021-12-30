function isValid(string, position, result={}) {

    let brackets = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }

    if (string.length % 2 != 0) {
        return false
    }

    if(position <= string.length) {

        if(string[position + 1] === brackets[string[position]]) {

            if(result[true]) {
                result[true] += 1
            } else {
                result[true] = 1
            }
                      
        } else {
            if(result[false]) {
                result[false] += 1
            } else {
                result[false] = 1
            }  
        }
    
        isValid(string, position + 2, result)

        return result
    }

    
    
    
}


console.log(isValid('()(){}', 0))
//console.log(isValid('{}{}(){}{}', 0))
//console.log(isValid('({{()}})', 0))