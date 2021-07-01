console.log("ok");

//Raccolta dati

var dist = parseInt(prompt("Quanti km vuoi viaggiare?"));

var age = parseInt(prompt("Quanti anni hai?"));

console.log(dist);
console.log(age);

//Calcolo del prezzo

if (age < 19){
    var price = (dist * 0.21 / 100 * 80)
}

else if (age > 65){
    var price = (dist * 0.21 / 100 * 60)
}

else {
    var price = (dist * 0.21)
}

console.log(price);