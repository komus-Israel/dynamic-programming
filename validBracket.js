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

    if (string.length % 2 != 0) {
        return false
    }

    splittedString = string.split('')

   if ( splittedString[position + 1] === brackets[splittedString[position]]) {

        splittedString.pop()
        splittedString.pop()

        string = splittedString.join('')
        return isValid(string, position + 2)
        
   }

   

   


}

console.log(isValid('(){}()[]]', 0))