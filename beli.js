function beli(uang, obj){
  return new Promise((resolve, reject) => {
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
      let kembalian = uang;
      if (uang >= obj.harga) {
        kembalian -= obj.harga;
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
        reject(kembalian)
      }
    }, obj.waktu);    
  })
}

module.exports = beli;
