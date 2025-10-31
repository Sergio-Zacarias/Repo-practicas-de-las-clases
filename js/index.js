/*
// Ejercicios clase 9
// Numero 1
// Pedir al usuario dos números usando prompt().
// Convertir esos datos a números con parseFloat().
// Mostrar en la consola los resultados de suma, resta, multiplicación,
// división y módulo.
// Verificar con isNaN() si los datos ingresados son válidos para evitar errores.

let primerNumero = parseFloat(prompt("Ingrese primer numero: "));
let segundoNumero = parseFloat(prompt("Ingrese segundo numero: "));
let verificacionNumeroUno = isNaN(primerNumero);
let verificacionDos = isNaN(segundoNumero);

if (verificacionNumeroUno || verificacionDos == true) {
  alert("Solo se permiten numeros,vuelva a intentar resfrescando la pagina");
} else {
  console.log("La suma es: ", primerNumero + segundoNumero);
  console.log("La resta es: ", primerNumero - segundoNumero);
  console.log("La division es: ", primerNumero / segundoNumero);
  console.log("La multiplicacion es: ", primerNumero * segundoNumero);
  console.log("El modulo es es: ", primerNumero % segundoNumero);
}

// Numero 2
// Qué tenés que hacer:
// Pedir nombre y edad con prompt().
// Validar que la edad sea un número válido con isNaN().
// Convertir la edad de texto a número con parseInt() o Number().
// Concatenar los datos para formar un mensaje descriptivo y mostrarlo en consola.
// Comparar la edad para decir si la persona es mayor de edad o no.

let nombre = prompt("Ingrese su nombre: ");
let edad = parseInt(prompt("Ingrese su edad: "));

if (isNaN(edad)) {
  alert("Solo se permiten numeros,vuelva a intentar resfrescando la pagina");
} else if (edad < 18) {
  console.log(
    "Hola ",
    nombre,
    "es menor de edad necesita supervicion de un adulto"
  );
} else {
  console.log("Bienvenido ", nombre, "su edad es: ", edad, "años.");
}



// Ejercicio clase 10
// Numero 1
// Declarar tres variables: nombre, correo y mensaje, asignándoles valores de prueba.
// Crear una función que valide que ninguna de estas variables esté vacía.
// Si todos los campos tienen texto, mostrar por consola: "Formulario completo. Listo para enviar."
// Si falta completar alguno, mostrar:"Faltan completar campos obligatorios."
// Tips claves:
//  Usá el operador && para verificar que todas las variables contengan texto.
// Jugá cambiando los valores de prueba para ver cómo responde tu validación.
// let nombre = prompt("Ingrese su nombre: ");
// let correo = prompt("Ingrese su correo: ");
// let mensaje = prompt("Ingrese su mensaje: ");

// if (nombre != "" && correo != "" && mensaje != "") {
//   console.log("Formulario completo. Listo para enviar.");
// } else {
//   console.log("Faltan completar campos obligatorios.");
// }

// Numero 2
// Crear un array de al menos 5 productos (por ejemplo: "Remera", "Pantalón", "Gorra").
// Recorrer el array con un bucle for o for...of.
// En cada iteración, mostrar el producto con un alert().
// Al finalizar, enviar por consola el mensaje: "Lista de productos mostrada correctamente."
// Tips claves:
// Definí el array como const para practicar buenas prácticas de variables constantes.
// Podés sumar un contador para contar cuántos productos se muestran.

const productos = [
  "Remera",
  "Short",
  "Botines",
  "Pelota",
  "Guantes",
  "Buzos",
  "Musculosas",
];
for (let i = 0; i < productos.length; i++) {
  alert(productos[i]);
}
console.log("Lista de productos mostrada correctamente.");
*/
