function saludarUsuario(nombre, apellido, edad) {
    let mensajeEdad = edad >= 18 ? "Muchas gracias por visitarnos" : "Sos menor de edad";
    let saludo = `Hola, ${nombre} ${apellido} !! ${mensajeEdad}.`;
    console.log(saludo);

    if (edad < 18) {
        despedirUsuario(nombre, apellido, edad);
    }
}

function despedirUsuario(nombre, apellido, edad) {
    alert("No podes estar acá, sos menor de edad!");

    for (let i = edad; i < 18; i++) {
        alert(`Adiós, ${nombre} ${apellido}!`);
    }
}

// Variables globales para contar victorias y total de intentos
let victorias = 0;
let intentos = 0;

document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("girar");
    const resultadoElemento = document.getElementById("resultado");
    const mensajeElemento = document.getElementById("mensaje");

    boton.addEventListener("click", function() {
        intentos++;  // Incrementar el número total de intentos

        // Obtener los números seleccionados por el usuario
        const numerosSeleccionados = document.getElementById("numerosSeleccionados").value;
        const numerosArray = numerosSeleccionados.split(',')
            .map(num => parseInt(num.trim()))
            .filter(num => !isNaN(num) && num >= 0 && num <= 36);

        // Verificar si se han ingresado números válidos
        if (numerosArray.length === 0) {
            mensajeElemento.innerText = "Por favor, ingresa números válidos entre 0 y 36, separados por comas.";
            resultadoElemento.innerText = "";
            return;
        }

        // Elegir un número aleatorio entre 0 y 36
        const numeroElegido = Math.floor(Math.random() * 37);

        // Mostrar el número elegido por la máquina
        resultadoElemento.innerText = "El número que salió es: " + numeroElegido;

        // Verificar si el usuario ganó
        if (numerosArray.includes(numeroElegido)) {
            victorias++;  // Incrementar el conteo de victorias
            mensajeElemento.innerText = "¡Felicitaciones! ganaste $35 pesos";
        }
        // Calcular el porcentaje de victorias
        let porcentajeVictorias = (victorias / intentos) * 100;
        console.log(`Porcentaje de victorias: ${porcentajeVictorias.toFixed(2)}%`);
    });
});

// Preguntar por los datos del usuario
let nombre = prompt("Bienvenido, ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");
let edad = prompt("Ingresa tu edad");

edad = parseInt(edad);

if (isNaN(edad)) {
    console.log("Por favor, ingresa una edad válida.");
} else {
    saludarUsuario(nombre, apellido, edad);

    // Crear objeto del usuario
    let usuario = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    };

    console.log("Datos del usuario:", usuario);
}