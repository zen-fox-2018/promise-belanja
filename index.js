const beli = require('./beli')


objBeliPermen = {
    item : 'Permen' ,
    harga : 1000,
    waktu :1000
}
objBeliRoti = {
    item : 'Roti' ,
    harga : 10000,
    waktu :20
}
objBeliKopi = {
    item : 'Kopi',
    harga : 2000,
    waktu :100
}

objBeliPayung = {
    item : 'Payung' ,
    harga : 3000,
    waktu :300
}

objBeliAcc = {
    item :'Accesoris',
    harga : 2000,
    waktu : 400
}

let money = 10000

beli(money,objBeliPermen)
    .then((kembalian)=> {
        return beli(kembalian,objBeliAcc)   
    }).then((kembalian)=> {
        return beli(kembalian,objBeliKopi)
    }).then((kembalian)=> {
        return beli(kembalian,objBeliRoti)
    }).then((kembalian)=> {
        return beli(kembalian, objBeliPayung)
    })
    .catch((kembalian)=> {
        console.log(`Uang sekarang ${kembalian}`);
        
    })