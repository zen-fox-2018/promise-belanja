const beli = require(`./beli`)
const items = [{
    item: `sayur`,
    harga: 3000
}, {
    item: `kol`,
    harga: 3000
}, {
    item: `ayam`,
    harga: 4000
}, {
    item: `aqua`,
    harga: 3000
}, {
    item: `tempe`,
    harga: 3000
}]

beli(10000, items[0]).then((result) => {
    return beli(result, items[1])
}).then((result) => {
    return beli(result, items[2])
}).then((result) => {
    return beli(result, items[3])
}).catch((err) => {
    console.log(err);
})

