function isValid(string, position) {

    let brackets = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }

    if (string.length === 0) {
        return true
    }

    splittedString = string.split('')

    if(position <= splittedString.length) {

        if (splittedString[position + 1] === brackets[splittedString[position]]) {

            
            newArray = splittedString.slice(position, splittedString.length)
            newString = newArray.join('')
            console.log(newArray)

            return isValid(newString, 0+2)       
            
        }

        return false
   
    }
}

console.log(isValid('(){}()(){}))))))', 0))