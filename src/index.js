module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 === 1) return false

    const arr = []
    arr.push(str[0])
    const map = new Map(bracketsConfig)

    for (let i = 1; i < str.length; i++) {

        if (str[i] === arr[arr.length - 1] && str[i] !== map.get(arr[arr.length - 1])) {
            arr.push(str[i]) 

        } else if (map.has(str[i]) && str[i] !== map.get(arr[arr.length - 1])) {
            arr.push(str[i])

        } else if (str[i] === map.get(arr[arr.length - 1])) {
            arr.pop()

        } else return false
    }
    if (arr.length === 0) return true
    return false
    
}