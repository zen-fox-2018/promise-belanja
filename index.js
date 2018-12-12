let beli = require('./beli.js')

  
beli(5000,{item :'baju', harga : 2000, waktu : 2000})
.then(function(kembalian){
    return(beli(kembalian,{item :'topi', harga : 2000, waktu : 2000}))
})
.then((kembalian) => {
    return(beli(kembalian,{item :'celana', harga : 2000, waktu : 2000}))
})
.catch(function(err){
    console.log(err)
})