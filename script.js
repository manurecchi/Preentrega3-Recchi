$(document).ready(function () {
    // Llevar la cuenta de intentos y victorias
    let intentos = localStorage.getItem('intentos') ? parseInt(localStorage.getItem('intentos')) : 0;
    let victorias = localStorage.getItem('victorias') ? parseInt(localStorage.getItem('victorias')) : 0;

    // verificar si ya hay un usuario guardado
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
    
  // Capturar datos del usuario
 function capturarDatosUsuario() {
 if (!usuarioGuardado) { // Solo preguntar si no hay usuario guardado
 const nombre = prompt("Ingresa tu nombre");
 const apellido = prompt("Ingresa tu apellido");
 const edad = parseInt(prompt("Ingresa tu edad"));

  // Verificar que el nombre y apellido no estén vacíos
 if (!nombre || !apellido || isNaN(edad)) {
alert("Por favor, ingresa todos los datos correctamente.");
 return;
     }
  // Verificar si es mayor de edad
if (edad < 18) {
  alert("Eres menor de edad, no puedes jugar.");
 despedirUsuario(nombre, apellido);
 return;
            }

 let usuario = { nombre, apellido, edad };
 localStorage.setItem('usuario', JSON.stringify(usuario));
 console.log("Datos del usuario guardados:", usuario);
 } else {
  console.log("Usuario ya registrado:", usuarioGuardado);
  $("#mensaje").text(`Bienvenido de nuevo, ${usuarioGuardado.nombre} ${usuarioGuardado.apellido}!`);
        }
    }

    // Despedir al usuario
 function despedirUsuario(nombre, apellido) {
 $("#mensaje").text(`No puedes estar acá, sos menor de edad! Adiós, ${nombre} ${apellido}!`);
    }

    // Actualizar estadísticas
 function actualizarEstadisticas() {
  $("#intentos").text(intentos);
  $("#victorias").text(victorias);
    }

    // Manejar el evento de clic
 $("#girar").click(function () {
 intentos++; // Incrementar el número total de intentos
 localStorage.setItem('intentos', intentos);

 const numerosSeleccionados = $("#numerosSeleccionados").val();
  const numerosArray = numerosSeleccionados.split(',')
 .map(num => parseInt(num.trim()))
 .filter(num => !isNaN(num) && num >= 0 && num <= 36);

 if (numerosArray.length === 0) {
    // verificar que sean numeros validos
 $("#mensaje").text("Por favor, ingresa números válidos entre 0 y 36, separados por comas.");
            $("#resultado").text("");
            return;
        }

   const numeroElegido = Math.floor(Math.random() * 37);
 $("#resultado").text("El número que salió es: " + numeroElegido);

 if (numerosArray.includes(numeroElegido)) {
 victorias++;
 localStorage.setItem('victorias', victorias);
 $("#mensaje").text("¡Felicitaciones! ganaste $35 pesos");
     } else {
 $("#mensaje").text("No ganaste esta vez, intenta de nuevo.");
        }

     // Actualizar estadísticas
  actualizarEstadisticas();

     // Porcentaje de victorias
 let porcentajeVictorias = intentos > 0 ? (victorias / intentos) * 100 : 0; // Manejo de división por cero
 $("#mensaje").append(` | Porcentaje de victorias: ${porcentajeVictorias.toFixed(2)}%`);

 let resultado = {
 intentos: intentos,
victorias: victorias,
porcentajeVictorias: porcentajeVictorias
        };

localStorage.setItem('resultadoJSON', JSON.stringify(resultado));
 console.log("Resultado almacenado en JSON:", resultado);
    });

    // Obtener resultados desde resultados.json
 async function obtenerResultados() {
 try {
 const response = await fetch('resultados.json');
 if (!response.ok) {
 throw new Error('Network response was not ok');
            }
 const data = await response.json();
 return data.resultados; // Devuelve el array de resultados
 } catch (error) {
  console.error('Error al cargar el archivo JSON:', error);
        }
    }

 obtenerResultados().then(resultados => {
 console.log("Resultados cargados:", resultados);
   
    });

 capturarDatosUsuario(); // Capturar los datos del usuario al cargar la página
 actualizarEstadisticas(); // Actualizar estadísticas en la carga inicial
});$(document).ready(function () {
 // Llevar la cuenta de intentos y victorias

 let intentos = localStorage.getItem('intentos') ? parseInt(localStorage.getItem('intentos')) : 0;
 let victorias = localStorage.getItem('victorias') ? parseInt(localStorage.getItem('victorias')) : 0;

    // Verificar si ya hay un usuario guardado
 const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
    
    // Capturar datos del usuario
 function capturarDatosUsuario() {
  if (!usuarioGuardado) { // Solo preguntar si no hay usuario guardado
 const nombre = prompt("Ingresa tu nombre");
const apellido = prompt("Ingresa tu apellido");
  const edad = parseInt(prompt("Ingresa tu edad"));

     // Verificar que el nombre y apellido no estén vacíos
 if (!nombre || !apellido || isNaN(edad)) {
     alert("Por favor, ingresa todos los datos correctamente.");
     return;
            }

 if (edad < 18) {
 alert("Eres menor de edad, no puedes jugar.");
despedirUsuario(nombre, apellido);
  return;
     }

 let usuario = { nombre, apellido, edad };
 localStorage.setItem('usuario', JSON.stringify(usuario));
 console.log("Datos del usuario guardados:", usuario);
     } else {
   console.log("Usuario ya registrado:", usuarioGuardado);
 $("#mensaje").text(`Bienvenido de nuevo, ${usuarioGuardado.nombre} ${usuarioGuardado.apellido}!`);
        }
    }

    // Despedir al usuario
 function despedirUsuario(nombre, apellido) {
     $("#mensaje").text(`No puedes estar acá, sos menor de edad! Adiós, ${nombre} ${apellido}!`);
    }

    // Actualizar estadísticas
function actualizarEstadisticas() {
  $("#intentos").text(intentos);
  $("#victorias").text(victorias);
    }

   
    $("#girar").click(function () {
     intentos++; // Incrementar el número total de intentos
  localStorage.setItem('intentos', intentos);

  const numerosSeleccionados = $("#numerosSeleccionados").val();
  const numerosArray = numerosSeleccionados.split(',')
     .map(num => parseInt(num.trim()))
     .filter(num => !isNaN(num) && num >= 0 && num <= 36);

      if (numerosArray.length === 0) {
     $("#mensaje").text("Por favor, ingresa números válidos entre 0 y 36, separados por comas.");
     $("#resultado").text("");
     return;
        }

  const numeroElegido = Math.floor(Math.random() * 37);
  $("#resultado").text("El número que salió es: " + numeroElegido);

 if (numerosArray.includes(numeroElegido)) {
      victorias++;
      localStorage.setItem('victorias', victorias);
         $("#mensaje").text("¡Felicitaciones! ganaste $35 pesos");
        } else {
            $("#mensaje").text("No ganaste esta vez, intenta de nuevo.");
        }

     // Actualizar estadísticas
 actualizarEstadisticas();

     // Porcentaje de victorias
 let porcentajeVictorias = intentos > 0 ? (victorias / intentos) * 100 : 0; // Manejo de división por cero
 $("#mensaje").append(` | Porcentaje de victorias: ${porcentajeVictorias.toFixed(2)}%`);

 let resultado = {
  intentos: intentos,
 victorias: victorias,
 porcentajeVictorias: porcentajeVictorias
        };

 localStorage.setItem('resultadoJSON', JSON.stringify(resultado));
  console.log("Resultado almacenado en JSON:", resultado);
    });

    // Obtener resultados desde resultados.json
 async function obtenerResultados() {
        try {
  const response = await fetch('resultados.json');
  if (!response.ok) {
       throw new Error('Network response was not ok');
   }
  const data = await response.json();
   return data.resultados; // Devuelve el array de resultados
     } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
        }
    }

  obtenerResultados().then(resultados => {
      console.log("Resultados cargados:", resultados);
    
    });

    capturarDatosUsuario(); // Capturar los datos del usuario al cargar la página
    actualizarEstadisticas(); // Actualizar estadísticas en la carga inicial
});