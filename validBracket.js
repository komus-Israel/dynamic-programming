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

   /*if ( splittedString[position + 1] === brackets[splittedString[position]]) {

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
        

   }*/


   if (brackets[splittedString[0]] === splittedString[1]) {

        splittedString.splice(0,2)
        console.log(splittedString)
        string = splittedString.join('')
        return isValid(string)
        
   }

   

   


}

console.log(isValid('(){}()'))