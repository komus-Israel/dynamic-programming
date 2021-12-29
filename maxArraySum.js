function maxArraySum(array, position, subArray = []) {
    if (array.length === 1) {
        return array[0]
    }

    subArray.push(array[0])

    return(subArray)


}

array = [-2, 1, 3, -4, 5]

console.log(maxArraySum(array))