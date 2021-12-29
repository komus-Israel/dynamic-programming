function decimalToBinary(decimal, result="") {

    if(decimal <= 1) {
        remainder = 1
        result = remainder + result
        return result
    }

    remainder = decimal % 2
    result = remainder + result
    return decimalToBinary(Math.floor(decimal/2), result)

}

console.log(decimalToBinary(64))

