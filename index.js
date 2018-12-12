//your code here
const beli = require('./beli')

let roti = {
    item: 'Roti',
    harga: 15000,
    waktu: 1000
}
let permen = {
    item: 'Permen',
    harga: 500,
    waktu: 500
}
let daging = {
    item: 'Daging',
    harga: 150000,
    waktu: 2000
}
let telur = {
    item: 'Telur',
    harga: 2500,
    waktu: 1000
}

beli(50000, roti)
    .then(kembalian => {
        return beli(kembalian, permen)
    })
    .then(kembalian => {
        return beli(kembalian, daging)
    })
    .then(kembalian => {
        return beli(kembalian, telur)
    })
    .then(kembalian => {
        return beli(kembalian, roti)
    })
    .catch(kembalian => {
        console.log(`sisa uang anda: ${kembalian}`)
    })