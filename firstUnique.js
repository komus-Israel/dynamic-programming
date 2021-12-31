function firstUnique(array, position, memo={}) {

    // return the only elemnt present in the array
    if (array.length === 1) {
        return array[0]
    }

    if (position < array.length) {


        if (array[position] in memo) {

           
            delete memo[array[position]]
            

        } else {

            memo[array[position]] = position
            
        }
        
        
        
        firstUnique(array, position + 1, memo)
              
        
    }

    return minUnique(memo, 0)
 

    

}


function minUnique(memo, position, min = Object.values(memo).length) {

        uniqueArray = Object.values(memo)

        if (position <= uniqueArray.length) {

            if(uniqueArray[position] < min) {
                return min = uniqueArray[position]
            }

            minUnique(memo, position + 1, min)
        }
}


array = [5, 10, 10, 20, 50, 60, 70, 70]
console.log(firstUnique(array, 0))