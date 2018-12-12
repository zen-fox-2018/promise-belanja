function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      cb(0)
    }
  }, obj.waktu);
}

function beliPromise(uang,obj){
  console.log(`Saya pergi membeli ${obj.item}`)
  let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if(kembalian > 0) {
        let objectResolve = {
          kalimat : `saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`,
          sisaUang : kembalian
        }
        resolve (objectResolve)
      }
      else {
        let objectReject = {
          kalimat : `uang gk cukup nih buat beli ${obj.item} sisa uang lu cuma ${uang}`,
          sisaUang : uang
        }
        reject (objectReject)
      }
    }, obj.waktu)
  })

  return promise
}

module.exports = {beli, beliPromise};
