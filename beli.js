function beli(uang, obj){
  return new Promise((resolve, reject) => {
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.item}, uang kamu sisa 0`);
        reject(0)
      }
    }, obj.waktu);
  })
}

module.exports = beli;
