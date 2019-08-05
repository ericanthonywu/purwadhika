const countDuck = num => {
    let duck = 1000;
    for (let i = 1; i <= num; i++) {
        duck = duck - (duck * (20 / 100));
        duck *= 2
    }
    return duck;
};

console.log(countDuck(3));

const babyShark = () => {
    const arrstr = ["Mommy shark ", "daddy shark ", "grandma shark ", "grandpa shark ", "let's go hunt "];
    let result = '';

    const doo = () => {
        let res = '';
        for (let i = 0; i < 6; i++) {
            res += "doo "
        }
        return res + "\n";
    };

    for (let i = 0; i < arrstr.length; i++) {
        for (let j = 0; j < 4; j++) {
            result += arrstr[i] + (j !== 3 ? doo() : "\n");
        }
    }
    return result
};

// console.log(babyShark());

const convertstr = str => {
    const arr = "atgc".split("");
    const conv = "tacg".split("");

    return conv[arr.indexOf(str.toLowerCase())]
};
console.log(convertstr("t"));