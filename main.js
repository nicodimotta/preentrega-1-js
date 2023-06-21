// Variable con el precio máximo permitido para un mousepad
const precioMaximo = 50;

const precioMousepad = parseFloat(prompt("Ingresa el precio del mousepad:"));

// Verificar si el precio está dentro del rango permitido
if (precioMousepad <= precioMaximo) {
  console.log("El mousepad está dentro del rango de precio permitido.");
} else {
  console.log("El mousepad excede el rango de precio permitido.");
}


console.log("--------------");


// Definir el número de mousepads a verificar
const cantidadMousepads = 3;
const precioMax = 50;

//bucle for para solicitar los precios de los mousepads
for (let i = 1; i <= cantidadMousepads; i+=1) {
  // Solicitar al usuario el precio del mousepad actual
  const precioMousepad = parseFloat(prompt(`Ingresa el precio del mousepad ${i}:`));

  // Verificar si el precio está dentro del rango permitido
  if (precioMousepad <= precioMax) {
    console.log(`El mousepad ${i} está dentro del rango de precio permitido.`);
  } else {
    console.log(`El mousepad ${i} excede el rango de precio permitido.`);
  }
}



console.log("---------------");




const precioMayor = 50;
const precioMinimo = 10;

// Función para verificar el rango de precios y mostrar una respuesta interactiva
function verificarPrecio(precio) {
  if (precio >= precioMinimo && precio <= precioMayor) {
    return "El mousepad está dentro del rango de precio permitido.";
  } else if (precio < precioMinimo) {
    return "El precio del mousepad es demasiado bajo.";
  } else {
    return "El precio del mousepad es demasiado alto.";
  }
}

// Función para interactuar con el usuario y solicitar el precio del mousepad
function interactuarConUsuario() {
  const precioMousepads = parseFloat(prompt("Ingresa el precio del mousepad:"));

  const respuesta = verificarPrecio(precioMousepads);
  alert(respuesta);

  // Preguntar al usuario si desea ingresar otro precio de mousepad
  const deseaContinuar = confirm("¿Deseas ingresar otro precio de mousepad?");
  if (deseaContinuar) {
    interactuarConUsuario();
  } else {
    alert("Simulador interactivo finalizado.");
  }
}

interactuarConUsuario();



