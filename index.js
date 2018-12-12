const beli = require('./beli.js')

class objItem{
    constructor(item, harga, waktu){
      this.item = item
      this.harga = harga
      this.waktu= waktu
    }
  }

var permen = new objItem('permen', 2000, 1000)
var indomie = new objItem('indomie', 4000, 1000)
var kopi = new objItem('kopi', 6000, 1000)
var emas = new objItem('emas', 120000, 1000)
var minum = new objItem('minum', 12000, 1000)

// console.log(typeof beli)
beli(100000, permen)
.then(kembalian =>{
    return beli(kembalian, indomie)})
.then(kembalian =>{
    return beli(kembalian, kopi)})
.then(kembalian =>{
    return beli(kembalian, emas)})
.then(kembalian =>{
    return beli(kembalian, minum)})
.then(kembalian =>{
    console.log('saya pulang');  
})
.catch(err =>{
    console.log(err)
})



