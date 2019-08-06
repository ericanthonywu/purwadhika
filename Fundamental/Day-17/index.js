function cekstr(argument,find) {
    const str = argument.split(' ')
    for (let i = 0; i < str.length ; i++) {
        if(argument.includes(str[i]))
            return str[i]
    }
}

console.log(cekstr('djancok ku',"jan"))