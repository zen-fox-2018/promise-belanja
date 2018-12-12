const beli = require('./beli')
let permen =  {
  item: 'Permen',
  harga: 2000,
  waktu: 1000
}
let pita =  {
  item: 'Pita',
  harga: 3000,
  waktu: 1000
}
let baju =  {
  item: 'Baju',
  harga: 5000,
  waktu: 1000
}
let celana =  {
  item: 'Celana',
  harga: 3500,
  waktu: 1000
}
let makanan =  {
  item: 'Makanan',
  harga: 4000,
  waktu: 1000
}

beli(10000, permen)
  .then(kembalian => {
    return beli(kembalian, makanan)
  })
  .then(kembalian => {
    return beli(kembalian, baju)
  })
  .then(kembalian => {
    return beli(kembalian, pita)
  })
  .then(kembalian => {
    return beli(kembalian, celana)
  })
  .catch(err => {
    console.log(`uangnya`, err)
  })

