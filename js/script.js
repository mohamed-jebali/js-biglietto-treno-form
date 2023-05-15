
let btn = document.querySelector("button.btn");
let message;
let messageRecap;


btn.addEventListener('click', function() {

    let inputDistance = parseInt(document.getElementById("InputDistance").value);
    let inputAge = parseInt(document.getElementById("inputAge").value);
    let risultato = inputDistance * 0.233;
    let prezzoScontato;

if(inputAge > 120 || inputAge <= 0){
    console.log("Inserisci un' età valida");
    message = "Inserisci un' età valida";
    prezzoScontato = 0;
    messageRecap = "Inserisci dati";
}
else if(inputAge < 18) {
    prezzoScontato = risultato - (0.194 * risultato);
    console.log(prezzoScontato + " €");
    message = "è stato applicato lo sconto del 19.4% per i passeggeri minorenni";
    messageRecap = (" età del passeggero " + inputAge) + (" /distanza percorsa " + inputDistance + "Km")
}
else if(inputAge > 65) {
    prezzoScontato = risultato - (0.377 * risultato);
    console.log(prezzoScontato + " €");
    message = "è stato applicato lo sconto del 37.7% per i passeggeri over 65";
    messageRecap = (" età del passeggero " + inputAge) + (" /distanza percorsa " + inputDistance + "Km")
}
else{
    console.log(prezzoScontato);
    message = "non è stato applicato lo sconto";
    messageRecap = (" età del passeggero " + inputAge) + (" /distanza percorsa " + inputDistance + "Km")
    prezzoScontato = risultato;
}

document.getElementById("output").innerHTML += prezzoScontato.toFixed(2) + "€ " + message;

document.getElementById("recap").innerHTML += messageRecap;

});

