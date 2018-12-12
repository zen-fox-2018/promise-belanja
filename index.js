const beli = require("./beli")

let candy = {
    item : "permen",
    harga : 80000
}

let beer = {
    item: "Beer",
    harga: 19000
}

let milk = {
    item: "susu",
    harga: 70000
}

let cookies = {
    item: "kueh",
    harga: 4000
}

let iceCream = {
    item : "Ice Cream",
    harga : 3000
}

beli(200000, candy).then(kembalian => {
    return kembalian
}).then(kembalian => {
    return beli(kembalian, beer)
}).then(kembalian => {
    return beli(kembalian, milk)
}).then(kembalian => {
    return beli(kembalian, cookies)
}).then(kembalian => {
    return beli(kembalian, iceCream)
}).catch(err => {
    console.log(err)
})