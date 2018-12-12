const beli = require('./beli')

let baju = {
    item: 'baju', 
    harga: 100000, 
    waktu: 500
}

sepatu = {
    item: 'sepatu', 
    harga: 650000, 
    waktu: 500
}

topi = {
    item: 'topi', 
    harga: 135000, 
    waktu: 500
}

kemeja = {
    item: 'kemeja', 
    harga: 350000, 
    waktu: 500
}

beli(1000000, baju)
    .then((kembalian) => {
        // console.log(baju, '--------- baju')
        return beli(kembalian, sepatu)
    })
    .then((kembalian) => {
        return beli(kembalian, topi)
    })
    .then((kembalian) => {
        return beli(kembalian, kemeja)
    })
    .then((kembalian, kemeja) => {
        console.log(`saya sudah selesai belanja`)
    })
    .catch((err) => {
        console.log(err)
    });