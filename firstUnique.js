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

        return minUnique(memo, 0)
    }

    

}

function minUnique(json, position, min = array.length) {

    if ( json[array[position]] < min) {
        min = json[array[position]]
        minUnique(json, position + 1)

        return min
    }

}


array = [10, 10, 20, 50, 50, 30]
console.log(firstUnique(array, 0))