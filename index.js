const beli = require ('./beli.js')

class Barang {
    constructor(item, harga, waktu) {
        this.item = item
        this.harga = harga
        this.waktu = waktu
    }
}


let permen = new Barang('permen', 1000, 2000)
let chokichoki = new Barang ('choki-choki', 500, 2000)
let kitKat = new Barang ('Kit-Kat', 7000, 2000)
let kacang = new Barang ('kacang', 1000, 2000)
let snickers = new Barang ('snickers', 7000, 3000)
let belanja = [permen, chokichoki, kitKat, kacang, snickers]
// console.log(belanja) 

// let kembalian = null
    beli(permen, 100000)
        .then (function(kembalian){
            return beli(kitKat, kembalian)
        })
        .then (function(kembalian){
            return beli(kacang, kembalian)
        })
        .then (function(kembalian){
            return beli(snickers, kembalian)
        })
        .then (function(kembalian){
            return beli(chokichoki, kembalian)
        })
        .catch()
