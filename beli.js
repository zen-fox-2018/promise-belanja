function beli(uang, obj){
  console.log(`Saya pergi membeli ${obj.item}`)
  let promise = new Promise( (resolve, reject)=> {
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        console.log(`> Saya sudah membeli ${obj.item}`);
        resolve(kembalian)
      }else{
        kembalian += obj.harga
        console.log(`Uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
        reject(kembalian)
      }
      
    }, obj.waktu);
  })
  return promise
}

module.exports = beli;
