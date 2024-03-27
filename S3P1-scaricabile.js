/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1,num2){
    let somma = num1+num2
    if(num1 === num2) {
        somma = somma*3
        return somma
    } else {
        return somma
    }
}

    console.log(crazySum(3,4))
    console.log(crazySum(6,6))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(num){
    let numero = parseInt(num)
    if((numero > 20 && numero <= 100) || numero === 400) {
        return true
    } else {
        return false
    }
}

    console.log(boundary(4))
    console.log(boundary(40))
    console.log(boundary(400))
    console.log(boundary(4000))


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(txt){
    let stringa = txt.split("")
    console.log(stringa)
    let reverseStringa = stringa.reverse()
    console.log(reverseStringa)
    let joinStringa = reverseStringa.join("")
    console.log(joinStringa)

    return joinStringa
     
}

console.log(reverseString('ciao'))

function reverseString0(str) {
    return txt.split("").reverse().join("")
}

console.log(reverseString('heilà'))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(frase){
    fraseArray = frase.split(" ")
    nuovaFrase = []
    
    for(parola of fraseArray){
        nuovaParola = parola[0].toUpperCase() + parola.slice(1)
        nuovaFrase.push(nuovaParola)                
    }

    return nuovaFrase.join(" ")

}

console.log(upperFirst("buongiorno a tutti quanti"))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {

    randomArray = []

    for (let i=0; i < n; i++) {
        
        let numeroRandom = (Math.round(Math.random()*10))
        console.log(numeroRandom)

        randomArray.push(numeroRandom)
    }

    return randomArray
    
}

console.log(giveMeRandom(10))  

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1,l2) {
    return (l1*l2)/2
}

console.log(area(5,8))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(numb) {
    return numb - 19
}

console.log(crazyDiff(50))
console.log(crazyDiff(5))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(str) {
    if(str.startsWith("code")) {
        return str 
    } else {
        return "code " + str
    }
}

console.log(codify('ciao'))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(numIntPos) {
    let numero = parseInt(numIntPos)
    if(numero % 3 === 0 || numero % 7 === 0) {
        return true
    } else {
        return false
    }
}

console.log(check3and7(8))
console.log(check3and7(9))
console.log(check3and7(21))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(text) {
    let word = text.split("")
    let popped = word.pop()
    let shifted = word.shift()
    let joined = word.join("")
    return joined
}

console.log(cutString('parolamoltolunga'))