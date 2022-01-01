function canSum(targetSum, array, memo={}) {

    for (const value of array) {
        memo[value] = targetSum - value
    }

    for (const value of Object.values(memo)) {

        if (array.includes(value) ) {
            return true
        }
    }

    return false

}





array = [5,3, 2, 200, 100]

console.log(canSum(300, array))