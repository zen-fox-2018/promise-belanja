function beli(uang, obj){
  console.log(`Saya pergi membeli ${obj.item}`)

  return new Promise((res, rej) => {
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        res(kembalian)
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.item} uangnya kurang ${Math.abs(kembalian)}`);
        rej(uang)
      }
    }, obj.waktu);
  })
}

module.exports = beli;
