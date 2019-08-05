// let arr = []
//
// for (let i =0;i <= 12;i+=3){
//     arr.push(i)
// }
// console.log(arr);

// let a=[];for(let b=0;b<=12;b++)a.push(!(b % 3)?"buzz":b);console.log(a)

let i, j,x = 0;
let hasil = "";

for (i = 0; i < 10*2; i++) {
    if(i % 2) {
        for (j = 0; j < i; j++) {
            if(j == 0) {
                for (x = 10*2; x > i/2; x--) {
                    hasil += " "
                }
            }
            hasil += "D"
        }
        hasil += "\n"
    }
}
console.log(hasil);