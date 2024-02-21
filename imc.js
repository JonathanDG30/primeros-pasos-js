var nombre = prompt("Ingresa tu nombre: ");
var peso = parseFloat(prompt("Ingresa tu peso: "));
var altura = parseFloat(prompt("Ingresa tu altura: "));
var imc = peso / Math.pow(altura, 2);
imc = Math.round(imc, 2);

if (imc < 18.5) {
    console.log(`${nombre} tu peso: ${peso} y altura: ${altura} me indican que tienes un índice de masa corporal: ${imc} de bajo peso`);
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log(`${nombre} tu peso: ${peso} y altura: ${altura} me indican que tienes un índice de masa corporal: ${imc} de peso saludable`);
} else if (imc >= 25.0 && imc <= 29.9) {
    console.log(`${nombre} tu peso: ${peso} y altura: ${altura} me indican que tienes un índice de masa corporal: ${imc} de sobrepeso`);
} else if (imc >= 30.0) {
    console.log(`${nombre} tu peso: ${peso} y altura: ${altura} me indican que tienes un índice de masa corporal: ${imc} de obesidad`);
}
