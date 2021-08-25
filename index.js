const totaleNumeri = 6;
const arrayNumeri = [];

// Chiedo all'utente totaleNumeri
for (let i = 0; i < totaleNumeri; i++) {
    let numero;
    // Chiedo all'utente il medesimo numero fin tanto che sia valido (più o meno).
    while (isNaN(numero)) numero = parseInt(prompt("Inserisci numero " + (i + 1)));
    // Se numero è dispari, lo inserisco nell'array.
    if (numero % 2 == 1) arrayNumeri.push(numero);
}

// Stampo l'arrai.
alert("I numeri dispari sono " + arrayNumeri);