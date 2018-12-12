const beli = require('./beli.js');

let bonbon = {
  item: 'bon-bon',
  waktu: 1000,
  harga: 2000
};

let cake = {
  item: 'cake',
  waktu: 5000,
  harga: 25000
};

let mie = {
  item: 'mie goreng',
  waktu: 2000,
  harga: 10000
};

let eskrim = {
  item: 'eskrim',
  waktu: 1500,
  harga: 8000,
};

let buah = {
  item: 'buah',
  waktu: 1000,
  harga: 15000
};

beli(2000, bonbon)
.then((kembalian) => {
    return beli(kembalian, cake)
  })
.then((kembalian) => {
    return beli(kembalian, mie)
  })
.then((kembalian) => {
  return beli(kembalian, eskrim)
})
.then((kembalian) => {
  return beli(kembalian, buah)
}) 
.then((kembalian) => {
  console.log(kembalian);
})
.catch((err) => {
  console.log(err);
})

