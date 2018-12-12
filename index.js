const beli = require('./beli.js');

const list1 = {
    item: 'Baju Zoro',
    harga: 150000,
    waktu: 5000
}

const list2 = {
    item: 'Sepatu Stacattu',
    harga : 50000,
    waktu: 4000
}

const list3 = {
    item: 'Kopi Espresso',
    harga : 18000,
    waktu: 3000
}

const list4 = {
    item: 'Teh Tarik',
    harga : 12000,
    waktu: 3000
}

const list5 = {
    item: 'Kopi Sultan',
    harga : 500000,
    waktu: 2000
}

beli(250000, list1)

    .then((kembalian) => {
        return beli(kembalian, list2);
    })

    .then (kembalian => {
        return beli(kembalian, list3);
    })

    .then (kembalian => {
        return beli(kembalian, list4);
    })

    .then (kembalian => {
        return beli(kembalian, list5);
    })

    .catch((err) => {
        console.log('ERR :', err);
    })