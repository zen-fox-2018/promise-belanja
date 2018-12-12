const beliPromise = require('./beli.js').beliPromise

// misal uang 10000
let barangBelanja = [
    {
        item: 'permen',
        harga: 5000,
        waktu: 1500
    },
    {
        item: 'cheetos',
        harga: 7000,
        waktu: 2000
    },
    {
        item: 'mineral watah',
        harga: 2000,
        waktu: 2250
    }
]
let uang = 100000


beliPromise(uang, barangBelanja[0])
    .then(function (objectResolve) {
        console.log(objectResolve.kalimat)
        console.log(`sisa uang : ${objectResolve.sisaUang}`)
        // beliPromise(objectResolve.sisaUang, barangBelanja[1])
        //     .then(function (objectResolve) {
        //         console.log(objectResolve.kalimat)
        //         console.log(`sisa uang : ${objectResolve.sisaUang}`)
        //     })
        //     .catch(function (objectReject) {
        //         console.log(objectReject.kalimat)
        //         console.log(`sisa uang : ${objectReject.sisaUang}`)
        //     })
        return beliPromise(objectResolve.sisaUang, barangBelanja[1])
    })
    .then(function (objectResolve) {
        console.log(objectResolve.kalimat)
        console.log(`sisa uang : ${objectResolve.sisaUang}`)
        return beliPromise(objectResolve.sisaUang, barangBelanja[2])
    })
    .then(function(objectResolve){
        console.log(objectResolve.kalimat)
        console.log(`sisa uang : ${objectResolve.sisaUang}`)
    })
    .catch(function (objectReject) {
        console.log(objectReject.kalimat)
        console.log(`sisa uang : ${objectReject.sisaUang}`)
    })

