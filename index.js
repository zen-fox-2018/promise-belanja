const beli = require('./beli')
let baju = {
    item: "baju gucci",
    harga: 5000,
    waktu: 700
}
let sepatu = {
    item: "sepatu nike",
    harga: 10000,
    waktu: 500
}
let hp = {
    item: "hp samsung",
    harga: 20000,
    waktu: 1000
}
let tas = {
    item : "tas balenciaga",
    harga: 6000,
    waktu: 140
}
let laptop = {
    item : "macbook pro",
    harga: 50000,
    waktu: 2000
}

beli(50000, baju)
    .then((kembalian)=> {
        return beli(kembalian, sepatu)
    })
    .then((kembalian)=> {
        return beli(kembalian, sepatu)
    })
    .then((kembalian) => {
        return beli(kembalian, hp)
    })
    .then((kembalian) => {
        return beli(kembalian, tas)
    })
    .then((kembalian)=> {
        return beli(kembalian, laptop)
    })
    .catch((err) => {
        console.log("uang",err)
    })