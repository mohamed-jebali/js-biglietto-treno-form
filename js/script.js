// let inputDistance = parseInt(document.getElementById("InputDistance"));
// let inputAge = parseInt(document.getElementById("inputAge"));
// let risultato = inputDistance * 0.233;
// let prezzoScontato;
let btn = document.querySelector("button.btn");



btn.addEventListener('click', function() {

    let inputDistance = parseInt(document.getElementById("InputDistance").value = "distance");
    let inputAge = parseInt(document.getElementById("inputAge").value = "number");
    let risultato = inputDistance * 0.233;
    let prezzoScontato;

if(inputAge > 120 || inputAge < 0){
    console.log("Inserisci un età valida")
}
else if(inputAge < 18) {
    prezzoScontato = risultato - (0.194 * risultato);
    console.log(prezzoScontato);
}
else if(inputDistance > 65) {
    prezzoScontato = risultato - (0.377 * risultato);
    console.log(prezzoScontato);
}
else{
    console.log(prezzoScontato);
}
});
