const beli = require('./beli.js');

var item1 = {"item" : "roti", "harga" : 10000, "waktu" : 1000};
var item2 = {"item" : "ayam", "harga" : 12000, "waktu" : 2000};
var item3 = {"item" : "daging", "harga" : 13000, "waktu" : 1500};
var item4 = {"item" : "sayur", "harga" : 10500, "waktu" : 1300};
var item5 = {"item" : "minyak tanah", "harga" : 20000, "waktu" : 1200};
var uang = 100000

function beliPromise(uang, item) {
  if (uang >= item.harga) {
    var err = `uang tidak cukup untuk membeli ${item.item}`;
    var promise = new Promise(function(resolve, reject) {
      beli(uang, item, function(kembalian, err) {
        if (kembalian) {
          resolve(kembalian)
        }
        else {
          reject(err);
        }
      })
    });
    return promise;
  }
}

beliPromise(uang, item1)
  .then(function(kembalian) {
    return beliPromise(kembalian, item2)
  })
  .then(function(kembalian){
    return beliPromise(kembalian, item3)
  })
  .then(function(kembalian) {
    return beliPromise(kembalian,item4)
  })
  .then(function(kembalian) {
    return beliPromise(kembalian, item5)
  })
  .catch(function(kembalian) {
    console.log(kembalian);
  })
