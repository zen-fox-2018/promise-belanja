//your code here
const beli = require("./beli.js");
const coklat = 
    {
        item : 'coklat',
        harga : 2000,
        waktu : 1000
    }
const snacks =
    {
        item : 'snacks',
        harga : 10000,
        waktu : 2000
    }
const shampoo =
    {
        item : 'shampoo',
        harga : 15000,
        waktu : 2000
    }
const sabun = 
    {
        item : 'sabun',
        harga : 15000,
        waktu : 2000
    }
const kopi = 
    {
        item : 'kopi',
        harga : 7000,
        waktu : 1000
    }

beli(40000, coklat)
.then(function(kembalian) {
    return beli(kembalian, snacks)
})
.then(function(kembalian) {
    return beli(kembalian, shampoo)
})
.then(function(kembalian) {
    return beli(kembalian, sabun)
})
.then(function(kembalian) {
    beli(kembalian, kopi)
})
.catch(function(result) {
    console.log(result)
})

