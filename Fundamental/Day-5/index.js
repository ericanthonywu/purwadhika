const str = ['D','E','P','R','E','C','A','T','E','D']

let stringvalues = '';
for(let i = 0; i < str.length;i++){
    stringvalues += i === (str.length - 1) ? str[i]: str[i] + " to the "
}
console.log(stringvalues)