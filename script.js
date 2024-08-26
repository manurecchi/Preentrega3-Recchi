function saludarUsuario(nombre, apellido, edad) {
    let mensajeEdad = edad >= 18 ? "Muchas gracias por visitarnos" : "Eres menor de edad";
    let saludo = `Hola, ${nombre} ${apellido} !! ${mensajeEdad}.`;
    console.log(saludo);

    if (edad < 18) {
        despedirUsuario(nombre, apellido, edad);
    } else {
        let total = calcularCostoTotal();
        if (total !== null) {
            console.log(`El costo total de tus productos es: $${total.toFixed(2)}`);
        }
    }
}

function despedirUsuario(nombre, apellido, edad) {
    console.log("No puedes estar aquí !!");

    for (let i = edad; i < 18; i++) {
        console.log(`Adiós, ${nombre} ${apellido}!`);
    }
}

function calcularCostoTotal() {
    let totalProductos = parseInt(prompt("¿Cuántos productos compraste?"));
    
    // Verificar que la cantidad de productos no sea mayor a 3
    if (totalProductos > 3) {
        console.log("Solo puedes ingresar hasta 3 productos.");
        return null;  // Salir de la función si se excede el límite
    }

    let total = 0;

    for (let i = 0; i < totalProductos; i++) {
        let precio = parseFloat(prompt(`Ingresa el precio del producto ${i + 1}:`));
        if (!isNaN(precio)) {
            total += precio;
        } else {
            console.log("El precio ingresado no es válido.");
            return null;  // Salir de la función si se ingresa un precio inválido
        }
    }

    return total;
}

let nombre = prompt("Bienvenido, ingresá tu nombre");
let apellido = prompt("Ingresá tu apellido");
let edad = prompt("Ingresa tu edad");

edad = parseInt(edad);

if (isNaN(edad)) {
    console.log("Por favor, ingresa una edad válida.");
} else {
    saludarUsuario(nombre, apellido, edad);
}