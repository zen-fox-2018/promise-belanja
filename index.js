const beli = require('./beli.js')

let rokok = {
  item: "rokok",
  harga: 1000
}

let mekdi = {
  item: "mekdi",
  harga: 1500
}

let minum = {
  item: "minum",
  harga: 500
}

let permen = {
  item: "permen",
  harga: 200
}

beli(10000, rokok)
  .then(function(uang) {
    return beli(uang, mekdi)
  })
  .then(function(uang) {
    return beli(uang, minum)
  })
  .then(function(uang) {
    return beli(uang, permen)
  })
  .then(function(uang) {
    console.log(`Selesai belanja, saatnya berpesta`);
  })
  .catch(function(uang) {
    console.log(`Saya pulang saja, saya bete, saya kurang kaya`);
  })