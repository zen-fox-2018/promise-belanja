const beli = require('./beli.js')

let sabun = {
  item : "sabun",
  harga : 12000,
  waktu : 500
}

let sampo = {
  item : "sampo",
  harga : 16000,
  waktu : 1000
}

let permen = {
  item : "permen",
  harga : 9000,
  waktu : 2000
}

let rokok = {
  item : "rokok",
  harga : 20000,
  waktu : 200
}

let tehkotak = {
  item : "tehkotak",
  harga : 4000,
  waktu : 800
}

beli(100000, sabun)
  .then( (kembalian1) => {
    beli(kembalian1, sampo)
      .then( (kembalian2) => {
        beli(kembalian2, permen)
          .then( (kembalian3) => {
            beli(kembalian3, rokok)
              .then( (kembalian4) => {
                beli(kembalian4, tehkotak)
                  .then( (kembalian5) => {
                    console.log(`Uang sisa ${kembalian5} kusimpan ke dalam tabungan.`)
                  })
              } )
          })
      })
  })
  .catch( (err) => {
    console.log(err)
  })