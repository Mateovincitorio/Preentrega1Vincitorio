let medida = prompt ("Por favor selecciona una opción:\n1. Convertir Celsius a Fahrenheit\n2. Convertir Kilómetros a Millas\n3. Convertir Kilos a Litros");

while (isNaN(medida) || (medida !== "1" && medida !== "2" && medida !== "3")) {
    validarNum(medida);
    medida = prompt ("Por favor selecciona una opción:\n1. Convertir Celsius a Fahrenheit\n2. Convertir Kilómetros a Millas\n3. Convertir Kilos a Litros");
}

if(medida == "1"){
        celAFar();
    }else if(medida == "2"){
        KilAMi();
    }else if(medida == "3"){
        kgAl();
    }

function celAFar(){
    let celcius = parseFloat(prompt("ingrese su medida: "));
        while(isNaN(celcius)){
            alert("inserte un numero");
            celcius = parseFloat(prompt("ingrese su medida: "));
        }
        const Fahrenheit = (celcius * 9/5) + 32;
        alert (celcius + "° convertidos a fahrenheit son: " + Fahrenheit + " Fahrenheit" );
    
}

function KilAMi(){
    let kilometros = parseInt(prompt("ingrese su medida: "));
    while (isNaN(kilometros)) {
        alert("inserte un numero");
        kilometros =  parseInt(prompt("ingrese su medida: "));
    }
    const millas = (kilometros * 0.62137);
    alert(kilometros + " convertidos a millas son: " + millas +" millas");
}

function kgAl(){
let kilos = parseFloat(prompt("Ingrese su medida en kilogramos:"));
    while (isNaN(kilos)) {
        alert("Ingrese una cantidad en numeros");
        kilos = parseFloat(prompt("Ingrese su medida en kilogramos:"));
    }
let liquido = prompt("ingrese con que liquido quiere comparar el peso: \n1. Agua \n2.Coca Cola \n3. Vodka");
while(liquido !== "1" && liquido !== "2" && liquido !== "3"){
    alert("Ingrese una opcion valida");
    liquido = prompt("Ingrese con que liquido quiere comparar el peso: \n1. Agua \n2.Coca Cola \n3. Vodka");
}
let densidad = obtenerDensidad(liquido);
let litros = kilosALitros(kilos,densidad);
alert (kilos + "kg convertidos a litros con la densidad de este liquido son: " + litros+ "L");
}

function obtenerDensidad(liquido) {
switch(liquido){
    case "1":
        return 1;
    break
    case "2": 
        return 1.03; 
    break
    case "3": 
        return 0.95; 
    break    
    default:
        return null;
}
}

function kilosALitros(kilos,densidad){
if(isNaN(kilos)|| kilos <= 0){
alert("inserte un valor razonable");
return null;
}else{
let resultado = kilos / densidad;
return  resultado;
}
}

function validarNum(medida){
    if(isNaN(parseFloat(medida))){
        alert("Ingrese una opcion");
    }
}