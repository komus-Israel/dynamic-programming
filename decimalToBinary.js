function decimalToBinary(decimal, result="") {

    if(decimal <= 1) {
        remainder = 1
        result += remainder
        return result
    }

    remainder = decimal % 2
    result += remainder
    return decimalToBinary(Math.floor(decimal/2), result)

}

console.log(decimalToBinary(64))

