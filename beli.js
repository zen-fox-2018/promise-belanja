function beli(uang, obj){
  console.log(`Saya pergi membeli ${obj.item}`)

  return new Promise ((resolve, reject) => {
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (uang >= obj.harga) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`)
        resolve(kembalian)
      } else if (uang < obj.harga) {
        console.log(`uang gak cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`)
        resolve(kembalian)
      } else {
        reject(kembalian)
      }
    }, obj.waktu);
  })
}

module.exports = beli;
