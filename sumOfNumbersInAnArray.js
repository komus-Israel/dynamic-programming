function arraySum(array, sum=0) {

        for (let values of array) {

            sum = sum + values
        }

        return sum

}


array = [10,20,30, 30,1000, 20, 50]

console.log(arraySum(array))