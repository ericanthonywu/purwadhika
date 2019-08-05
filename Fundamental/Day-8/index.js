var diriku = {
    nama: {
        depan : "Eric",
        belakang: "Anthony"
    },
    namaFull: function () {
        return this.nama.depan + this.nama.belakang
    },
    pekerjaan : "Backend Developer",
    hobby : "Coding"
}

console.log(`Namaku adalah ${diriku.namaFull()}`);
console.log(`Aku adalah seorang ${diriku.pekerjaan}`);
console.log(`Aku senang ${diriku.hobby}`);