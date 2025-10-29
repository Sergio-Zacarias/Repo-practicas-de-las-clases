// Ejercicio clase 9
// Pedir al usuario dos números usando prompt().
// Convertir esos datos a números con parseFloat().
// Mostrar en la consola los resultados de suma, resta, multiplicación,
// división y módulo.
// Verificar con isNaN() si los datos ingresados son válidos para evitar errores.

// let primerNumero = parseFloat(prompt("Ingrese primer numero: "));
// let segundoNumero = parseFloat(prompt("Ingrese segundo numero: "));
// let verificacionNumeroUno = isNaN(primerNumero);
// let verificacionDos = isNaN(segundoNumero);

// if (verificacionNumeroUno || verificacionDos == true) {
//   alert("Solo se permiten numeros,vuelva a intentar resfrescando la pagina");
// } else {
//   console.log("La suma es: ", primerNumero + segundoNumero);
//   console.log("La resta es: ", primerNumero - segundoNumero);
//   console.log("La division es: ", primerNumero / segundoNumero);
//   console.log("La multiplicacion es: ", primerNumero * segundoNumero);
//   console.log("El modulo es es: ", primerNumero % segundoNumero);
// }

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
