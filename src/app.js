console.log("Merhaba kodlama.ioo")

//JS type safe değildir, int tanımlanan bir şeye string atabiliriz

let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2
//euroDun=11  // hata verir -> euroDun is read-only

console.log(euroDun)

let konutKredileri = ["Konut Kredisi",
"Emlak Konut Kredisi",
"Kamu Konut Kredisi",
"Kamu Konut Kredisi2"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>");
}
console.log("</ul>")



console.log(konutKredileri)


//Ödev 1
//tip güvenli değil, bir değişkene string atıp sonrasında int atabiliriz.

//var, let, const kullandığımız veri tipleridir.
//sayi1 var olarak tanımladığında hata vermez.
let sayi1 = 10
 sayi1 = "engin demiroğ"
let student = {id:1, name:"Engin"}
console.log(student)

function save(ogrenci, puan = 10) {
    console.log(ogrenci.name + "  " + puan)
}
save(student, 100)

let students = ["Engin Demiroğ",
"Halit Kalaycı","Engin Toprak","Büşra"]

console.log(students)

let students2 = [student, {id:2, name:"Halit"},"Ankara", {city:"İstanbul"}]
console.log(students2)

//rest- geriye kalanlar(params, varArgs)
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
    console.log(products[0])
}

//console.log(typeof showProducts)

//showProducts(10,"Elma", "Armut", "Karpuz")

//spread: ayrıştırmak
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring: elimizdeki değerleri değişkenlere atıyor
let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}
someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id, name} = category
console.log(id)
console.log(name)

console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)
