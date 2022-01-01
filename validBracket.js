function isValid(string) {

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


   if (brackets[splittedString[0]] === splittedString[1]) {

        splittedString.splice(0,2)
        string = splittedString.join('')
        return isValid(string)

   }

   if (brackets[splittedString[0]] === splittedString[splittedString.length - 1]) {

        splittedString.shift()
        splittedString.pop()

        string = splittedString.join('')
        return isValid(string, 0)

   }

   return false

   

   


}

console.log(isValid('(){}()'))
console.log(isValid('({()})}}'))