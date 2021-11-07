/*1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )

Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)*/

function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        let counter = 0;
        for (let j = 2; j < number; j++) {
            if(number%j == 0){
                counter++;
            }
        }

        if(counter != 0){
            console.log(number + " asal sayi değildir.")
        }
        else{
            console.log(number + " asaldır.")
        }
    }
}

findPrime(8, 15, 31)

/*2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)*/
function friendsNumber(...fNumbers) {
    let fNumberTotal1 = 0;
    let fNumberTotal2 = 0;
    let number1 = fNumbers[0]
    let number2 = fNumbers[1]

    for (let i = 0; i < number1; i++) {
        if(number1 % i == 0){
            fNumberTotal1 += i;
        }
    }

    for (let i = 0; i < number2; i++) {
        if(number2 % i == 0){
            fNumberTotal2 += i;
        }
    }

    if(fNumberTotal1 == number2 && fNumberTotal2 == number1){
        console.log(number1 + " ile " +number2+ " arkadaş sayılardır.")
    }
}

friendsNumber(220,284)

/*3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.*/

function writePerfectNumbers() {
    for (let i = 1; i < 1000; i++) {
        let total = 0
        for (let j = 0; j < i; j++) {
            if(i % j == 0){
                total += j
            }
        }
        if(i == total){
            console.log(i)
        }
    }
}
writePerfectNumbers()

/*4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.*/
function primeNumbers() {
    for (let i = 2; i < 1000/2; i++) {
        let counter = 0
        for (let j = 2; j < i; j++) {
            if(i % j == 0){
                counter = counter+1
            }
        }
        if(counter == 0){
            console.log(i)
        }
        
    }
}
primeNumbers()