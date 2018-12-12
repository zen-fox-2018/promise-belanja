const beli = require('./beli')


let buku =
{
    item: 'buku',
    harga: 3000,
    waktu: 3000
}

let pena =
{
    item: 'pena',
    harga: 1000,
    waktu: 2000
}

let pensil =
{
    item: 'pensil',
    harga: 500,
    waktu: 1000
}

let penghapus =
{
    item: 'penghapus',
    harga: 500,
    waktu: 500
}

let penggaris =
{
    item: 'pengaris',
    harga: 1500,
    waktu: 1000
}




beli(5000, buku)
    .then(function (kembalian) {
        return beli(kembalian, pena)
    })
    .then(function (kembalian) {
        return beli(kembalian, pensil)
    })
    .then(function (kembalian) {
        return beli(kembalian, penghapus)
    })
    .then(function (kembalian) {
        return beli(kembalian, penggaris)
    })
    .catch(function (err) {
    })
