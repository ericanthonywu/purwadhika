function segitiga(val) {
    let hasil = '';
    for (let i = 0; i < val; i++) {
        hasil += "*";
        for (let j = 0; j < i; j++) {
            hasil += "*"
        }
        hasil += "\n"
    }
    return hasil;
}
console.log(segitiga(3))