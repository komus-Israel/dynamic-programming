function abbreviation(a, b, position, result="") {
    if (a === b) {
        return "YES"
    }

    if (result === b) {
        return "YES"
    }

    a = a.toUpperCase()

   
    if (position < a.length) {
        if (b.includes(a[position])) {
            result = result + a[position]
        }
        return abbreviation(a, b, position + 1, result) 
    }

    return 'NO'
        
    
}
   

console.log(abbreviation("KXzQ", "K", 0))