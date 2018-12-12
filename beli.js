function beli(uang, obj){
  return new Promise ((resolve,reject) => {
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
        let kembalian = uang - obj.harga
        if (uang > obj.harga) {
          console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
          resolve(kembalian)
        }else{
          console.log(`uang gk cukup nih buat beli ${obj.item} sisa uangnya cuma ${uang}`);
          reject(uang)
        }
    }, obj.waktu);
  })
}

module.exports = beli;
