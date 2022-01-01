function isPanlindrome(string) {

    // introduce the base case
    if (string.length === 0 || string.length === 1) {
        return true
    }

    if(string[0] === string[string.length - 1]) {
        
        return isPanlindrome(string.substring(1, string.length - 1))
    }

    return false
    
  

    
    

}


console.log(isPanlindrome("kayak"))
console.log(isPanlindrome("racecar"))