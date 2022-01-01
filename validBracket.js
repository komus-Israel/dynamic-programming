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

        splittedString.shift()
        splittedString.shift()

        string = splittedString.join('')
        return isValid(string, position + 2)
        
   }

   if ( splittedString[splittedString.length - 1] === brackets[splittedString[0]]) {
        splittedString.shift()
        splittedString.pop()

        string = splittedString.join('')
        return isValid(string, 0)
        

   }

   

   


}

console.log(isValid('(){}()', 0))