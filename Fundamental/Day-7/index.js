function repIndexOf(str,arr) {
    return arr.indexOf(str) ? arr.length - (arr.indexOf(str) + 1) : "no index available"
}
arrayku = ['seto','andi','naruto','popok'];
arr = [
    "asd"
]
console.log(repIndexOf('asd',arrayku))