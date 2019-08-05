// const deretBilangan = num => {
//     let hasil = '';
//     let hasilakhir = 0;
//     for (let i = 1; i <= num; i++) {
//         hasil += i === num ? `${i}` : `${i}+`;
//         hasilakhir += i;
//     }
//     return `${hasil} = ${hasilakhir}`
// };
// console.log(deretBilangan(5));

const caearCipher = (str, index) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let string = str.split("");
    let hasil = "";
    for (let j = 0; j < string.length; j++) {
        for (let i = 0; i < alphabet.length; i++) {
            if (alphabet[i] === string[j]) {
                hasil += alphabet[(i > alphabet.length ? 0 : i + index)]
            }
        }
    }
    return hasil;
};
console.log(caearCipher('z',1));