const beli = require('./beli.js');
class Items {
  constructor(item, harga, waktu) {
    this.item = item;
    this.harga = harga;
    this.waktu = waktu;
  }
}

let permen = new Items('Permen', 5000, 2000);
let gorengan = new Items('Gorengan', 20000, 3000);
let kopi = new Items('Kopi', 16000, 5000);
let snack = new Items('Snack', 15000, 2000);
let susu = new Items('Susu', 20000, 5000);

beli(50000, permen)
  .then((kembalian) => {
    return beli(kembalian, gorengan);
  })
  .then((kembalian) => {
    return beli(kembalian, kopi);
  })
  .then((kembalian) => {
    return beli(kembalian, susu);
  })
  .then((kembalian) => {
    return beli(kembalian, snack);
  })

  .catch((sisa) =>{
    console.log(sisa);
  })
