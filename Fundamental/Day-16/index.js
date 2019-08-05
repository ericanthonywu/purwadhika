function arr(arr) {
    return Math.max(...arr) - arr.sort((a, b) => {return b - a;})[1];
}

console.log(arr([1, 2, 10, 6]));

function numble(x) {
    const arrstr = x.split("");
    let res = '';
    for (let i = 0; i < arrstr.length; i++) {
        for (let j = 0; j < (i + 1); j++) {
            res += j == 0 ? arrstr[i].toUpperCase() : arrstr[i]
        }
        res += i === (arrstr.length - 1) ? "" : "-"
    }
    return res
}

console.log(numble('fgji'));

function kaprekars(num) {
    const desc = num => {
        return parseInt(num.toString().split("").sort((a, b) => {
            return b - a
        }).join(""))
    };
    const asc = num => {
        return parseInt(num.toString().split("").sort().join(""))
    };
    let sort = true;
    let count = 0;
    let res = 0;
    while (sort) {
        res = !res ? desc(num) - asc(num) : desc(res) - asc(res);
        console.log(`${desc(res)} - ${asc(res)}`);
        count++;
        if (res === (desc(res) - asc(res))) sort = false
    }
    return `${count} || ${res}`;
}

console.log(kaprekars(7615));