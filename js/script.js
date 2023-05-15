
let btn = document.querySelector("button.btn");
let message;
let recapAge;
let recapDistance;


btn.addEventListener('click', function() {
    

    let inputDistance = parseInt(document.getElementById("InputDistance").value);
    let inputAge = parseInt(document.getElementById("inputAge").value);
    let risultato = inputDistance * 0.233;
    let prezzoScontato;

if(inputAge > 120 || inputAge <= 0){
    console.log("Inserisci un' età valida");
    message = "Inserisci un' età valida";
    prezzoScontato = 0;
    recapDistance = "Inserisci dati";
    recapAge = "Inserisci dati";
}
else if(inputAge < 18) {
    prezzoScontato = risultato - (0.194 * risultato);
    console.log(prezzoScontato + " €");
    message = "è stato applicato lo sconto del 19.4% per i passeggeri minorenni";
    recapDistance = ("distanza percorsa " + inputDistance + "Km");
    recapAge = ("eta del passeggero " + inputAge);
}
else if(inputAge > 65) {
    prezzoScontato = risultato - (0.377 * risultato);
    console.log(prezzoScontato + " €");
    message = "è stato applicato lo sconto del 37.7% per i passeggeri over 65";
    recapDistance = ("distanza percorsa " + inputDistance + "Km");
    recapAge = ("eta del passeggero " + inputAge);
}
else{
    console.log(prezzoScontato);
    message = "non è stato applicato lo sconto";
    recapDistance = ("distanza percorsa " + inputDistance + "Km");
    recapAge = ("eta del passeggero " + inputAge);
    prezzoScontato = risultato;
}



document.getElementById("output").innerHTML += prezzoScontato.toFixed(2) + "€ " + message;
document.getElementById("recapAge").innerHTML += recapAge;
document.getElementById("recapDistance").innerHTML += recapDistance;

});

