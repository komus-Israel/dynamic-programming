function firstUnique(array, position, memo={}) {

    // return the only elemnt present in the array
    if (array.length === 1) {
        return array[0]
    }

    if (position < array.length) {

        if (memo[array[position]]) {

            memo[array[position]] = false
        } else {
            memo[array[position]] = position
        }   

       

        firstUnique(array, position + 1, memo)

        return memo
    }

    

}


array = [10, 20, 50, 50, 30]
console.log(firstUnique(array, 0))