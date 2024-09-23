// Llevar la cuenta de intentos y victorias
let intentos = localStorage.getItem('intentos') ? parseInt(localStorage.getItem('intentos')) : 0;
let victorias = localStorage.getItem('victorias') ? parseInt(localStorage.getItem('victorias')) : 0;

//saludar usuario
function saludarUsuario(nombre, apellido, edad) {
    let mensajeEdad = edad >= 18 ? "" : "Sos menor de edad";
    document.getElementById("mensaje").innerText = mensajeEdad;

    if (edad < 18) {
        alert("Eres menor de edad, no puedes jugar.");
        despedirUsuario(nombre, apellido);
    }
}

function despedirUsuario(nombre, apellido) {
    const mensajeElemento = document.getElementById("mensaje");
    mensajeElemento.innerText = `No puedes estar acá, sos menor de edad! Adiós, ${nombre} ${apellido}!`;
}

// datos del usuario
function capturarDatosUsuario() {
    const nombre = prompt("Ingresa tu nombre");
    const apellido = prompt("Ingresa tu apellido");
    const edad = parseInt(prompt("Ingresa tu edad"));

    // Reiniciar datos si se introduce un nuevo usuario
    localStorage.removeItem('intentos');
    localStorage.removeItem('victorias');
    intentos = 0;
    victorias = 0;

    if (isNaN(edad)) {
        console.log("Por favor, ingresa una edad válida.");
    } else {
        saludarUsuario(nombre, apellido, edad);
        
        let usuario = { nombre, apellido, edad };
        localStorage.setItem('usuario', JSON.stringify(usuario));
        console.log("Datos del usuario:", usuario);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("girar");
    const resultadoElemento = document.getElementById("resultado");
    const mensajeElemento = document.getElementById("mensaje");

    if (resultadoElemento) {
        resultadoElemento.innerText = `Intentos anteriores: ${intentos}, Victorias anteriores: ${victorias}`;
    }

    if (boton) {
        boton.addEventListener("click", function() {
            intentos++;  // Incrementar el número total de intentos
            localStorage.setItem('intentos', intentos);

            const numerosSeleccionados = document.getElementById("numerosSeleccionados").value;
            const numerosArray = numerosSeleccionados.split(',')
                .map(num => parseInt(num.trim()))
                .filter(num => !isNaN(num) && num >= 0 && num <= 36);

            if (numerosArray.length === 0) {
                mensajeElemento.innerText = "Por favor, ingresa números válidos entre 0 y 36, separados por comas.";
                resultadoElemento.innerText = "";
                return;
            }

            const numeroElegido = Math.floor(Math.random() * 37);
            resultadoElemento.innerText = "El número que salió es: " + numeroElegido;

            if (numerosArray.includes(numeroElegido)) {
                victorias++;
                localStorage.setItem('victorias', victorias);
                mensajeElemento.innerText = "¡Felicitaciones! ganaste $35 pesos";
            } else {
                mensajeElemento.innerText = "No ganaste esta vez, intenta de nuevo.";
            }

            // Porcentaje de victorias
            let porcentajeVictorias = (victorias / intentos) * 100;
            console.log(`Porcentaje de victorias: ${porcentajeVictorias.toFixed(2)}%`);
            mensajeElemento.innerText += ` | Porcentaje de victorias: ${porcentajeVictorias.toFixed(2)}%`;

            let resultado = {
                intentos: intentos,
                victorias: victorias,
                porcentajeVictorias: porcentajeVictorias.toFixed(2)
            };

            localStorage.setItem('resultadoJSON', JSON.stringify(resultado));
            console.log("Resultado almacenado en JSON:", resultado);
        });
    }

    capturarDatosUsuario();  // Asegurarse de que se capturen los datos del usuario al cargar la página
});