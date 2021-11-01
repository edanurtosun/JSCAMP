
function addToCart(productName="Elma", quantity) {
    console.log("Sepete eklendi : ürün:" + productName + " adet:" + quantity)
}

//addToCart("Çanta")
//addToCart("Ayakkabı")
addToCart("Elma", 10)

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2!")
}

sayHello2()

function addtoCart2(productName, quantity, unitPrice) {
    
}

addtoCart2("Elma", 5, 10)
addtoCart2("Armut", 2, 20)
addtoCart2("Limon", 3, 15)

let product1 = {productName:"Elma", quantity:5, unitPrice:10}

function addToCart3(product) {
    console.log("Ürün : " +product.productName)
    console.log("Adet : " +product.quantity)
    console.log("Fiyat : " +product.unitPrice)
}

addToCart3(product1)

//referans tip
let product2 = {productName:"Elma", quantity:5, unitPrice:10}
let product3 = {productName:"Elma", quantity:5, unitPrice:10}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

//değer tip
let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Çilek", quantity:5, unitPrice:10},
    {productName:"Muz", quantity:5, unitPrice:10},
    {productName:"Kivi", quantity:5, unitPrice:10}
]

addToCart4(products)

//rest -> ...
function add(...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
}

add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbers = [30, 10, 500, 600, 120]
console.log(Math.max(...numbers)) //spread

//destructring
let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population: 20000000}, 
    {name:"Marmara", population: 30000000}, 
    {name:"Karadeniz", population: 10000000},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"],
    ]
]
console.log(icAnadolu.population)
console.log(marmara.name)
console.log(karadeniz.population)
console.log(icAnadoluSehirleri)

let newProductName, newQuantity, newUnitPrice
 ({productName: newProductName, quantity: newQuantity, unitPrice:newUnitPrice} 
    = {productName:"Çilek", quantity:5, unitPrice:10})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)