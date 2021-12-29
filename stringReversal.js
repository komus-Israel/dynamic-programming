function reverseString(string) {
    if(string === "" || string.length === 1) {
        return string
    }

    var result = string[string.length - 1] + reverseString(string.slice(0, string.length - 1))

    return result

}

console.log(reverseString("come here to the beach of the sunset"))