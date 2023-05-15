let inputDistance = document.getElementById("InputDistance")
let inputAge = document.getElementById("inputAge");
let risultato = inputDistance * 0.233;
let btn = document.querySelector(".btn");
console.log(btn);

if(inputAge < 18) {
    prezzoScontato = risultato - (0.194 * risultato);
}
else if(inputDistance > 65) {
    prezzoScontato = risultato - (0.377 * risultato);
}
// else{
//     document.getElementById("output").innerHTML = risultato.toFixed(2) + "€";
// }
