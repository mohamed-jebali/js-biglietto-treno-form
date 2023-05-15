
let btn = document.querySelector("button.btn");



btn.addEventListener('click', function() {

    let inputDistance = parseInt(document.getElementById("InputDistance").value);
    let inputAge = parseInt(document.getElementById("inputAge").value);
    let risultato = inputDistance * 0.233;
    let prezzoScontato;

if(inputAge > 120 || inputAge < 0){
    console.log("Inserisci un' età valida");
}
else if(inputAge < 18) {
    prezzoScontato = risultato - (0.194 * risultato);
    console.log(prezzoScontato.toFixed(2) + " €");
}
else if(inputDistance > 65) {
    prezzoScontato = risultato - (0.377 * risultato);
    console.log(prezzoScontato.toFixed(2) + " €");
}
else{
    console.log(prezzoScontato);
}
});
