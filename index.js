const beli = require('./beli.js')

beli(100000, {item: 'Mobil', harga: 50000,waktu: 1000})
  .then(function(kembalian) {
    return beli(kembalian, {item: 'Motor',harga: 25000,waktu: 1500})
  })
  .then(function(kembalian) {
    return beli(kembalian, {item: 'Sepeda', harga: 10000, waktu: 1000})
  })
  .then(function(kembalian) {
    return beli(kembalian, {item: 'Telepon Fax', harga: 7500, waktu: 500})
  })
  .then(function(kembalian) {
    return beli(kembalian, {item: 'Antena TV', harga: 8000, waktu: 700})
  })
  .then(function(kembalian) {
    return kembalian
  })
  .catch(function(err) {
      return err
  })
  