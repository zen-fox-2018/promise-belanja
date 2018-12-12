
function beli(uang, obj){
  console.log(`Saya pergi membeli ${obj.item}`)
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
        reject(uang)
      }
    }, obj.waktu);
  })
}

module.exports = beli;
