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

//Con for tradicional
// for (let i = 0; i < productos.length; i++) {
//   alert(productos[i]);
// }
// console.log("Lista de productos mostrada correctamente.");

//Con for of
for (const producto of productos) {
  alert(producto);
}
console.log("Lista de productos mostrada correctamente.");
*/

// Ejercicio clase 11
// Numero 1
// Definí cuatro funciones diferentes: suma, resta, multiplicación y división.
// Cada función recibirá dos parámetros numéricos y devolverá el resultado
// de la operación correspondiente.
// En el caso de la función dividir, acordate de verificar que el divisor
// no sea cero. Si lo es, mostrá un mensaje de error en la consola.
// Probá el correcto llamando a las 4 funciones con las mismas dos variables.
// ¡Importante! Mostrá los resultados de cada operación en la consola
// de forma clara y legible usando console.log().

// function suma(num1, num2) {
//   return num1 + num2;
// }

// function resta(num1, num2) {
//   return num1 - num2;
// }

// function multiplicacion(num1, num2) {
//   return num1 * num2;
// }

// function division(num1, num2) {
//   if (num2 === 0) {
//     console.log("Error, no se puede dividir por 0.");
//   }
//   return num1 / num2;
// }

// console.log("La suma es: " + suma(2, 3));
// console.log("La resta es: " + resta(10, 5));
// console.log("La multiplicacion es: " + multiplicacion(7, 9));
// console.log("La division es: " + division(14, 7));

// Numero 2
// 1. Creá una función llamada generarProductos() que no reciba parámetros.
// 2. Dentro de la función, armá un array llamado productos con al menos 5
// objetos.
// Cada producto debe tener:
// a. id: un identificador numérico único
// b. name: nombre del producto
// c. description: descripción breve
// d. precio: precio en formato numérico
// 3. Retorná el array completo desde la función.
// 4. Fuera de la función, guardá el resultado en una variable y recorré el
//  array para mostrar en consola cada producto. Al hacerlo, utilizá la
// desestructuración ({ id, name, precio }) dentro del bucle para acceder a
// las propiedades de una forma más limpia.
// 5. Creá un objeto para un nuevo productoOferta.
// 6. Usando el spread operator (...), creá un nuevo array
// catalogoActualizado que contenga todos los productos del catálogo original
// más el nuevo productoOferta.
// Mostrá este nuevo array en la consola.

// const generarProductos = () => {
//   const producto = [
//     { id: 3, name: "zapatillas", description: "T-Mac1", precio: 180000 },
//     { id: 1, name: "short", description: "Short de tu equipo", precio: 15000 },
//     { id: 7, name: "medias", description: "Medias largas", precio: 3000 },
//     { id: 10, name: "pelota", description: "Moltean N7", precio: 7500 },
//     {
//       id: 8,
//       name: "sudadera",
//       description: "Reversible(blanco y negro)",
//       precio: 9800,
//     },
//     { id: 4, name: "vendas", description: "Para tobillos", precio: 2500 },
//     {
//       id: 2,
//       name: "bolso",
//       description: "Para entrenamiento o viajes",
//       precio: 39000,
//     },
//   ];

//   return producto;
// };

// let resultado = generarProductos();
// resultado.forEach(({ id, name, description, precio }) => {
//   console.log(
//     `Producto numero y nombre ${id} ${name}.Descripcion: ${description} tiene un valor de $ ${precio} `
//   );
// });
// let catalogoOriginal = generarProductos();
// const productoOferta = {
//   id: 19,
//   name: "aro de basquet",
//   description: "Jirafa con soporte + aro con tablero de acrilico ",
//   precio: 20000,
// };

// const agregarProducto = (catalogo, producto) => {
//   const nuevoCatalogo = [...catalogo, producto];
//   return nuevoCatalogo;
// };
// const catalogoActualizado = agregarProducto(catalogoOriginal, productoOferta);
// catalogoActualizado.forEach(({ id, name, description, precio }) => {
//   console.log(
//     `Producto numero y nombre ${id} ${name}.Descripcion: ${description} tiene un valor de $ ${precio} `
//   );
// });

//IMPORTACION Y EXPORTACION DE MODULOS
//La importacion se hace arriba de todo, pero lo hago aca solo para probar.
import { agregarProdCarrito } from "./carrito.js";
const carrito = [{ nombre: "short", precio: 15000 }];

const programa = () => {
  console.log("1- Agregar producto");

  let opcion = prompt("Elija una opcion");
  if (opcion === "1") {
    let nombre = prompt("Ingrese nombre del producto");
    let precio = parseInt(prompt("Ingrese el precio"));

    const nuevoProducto = { nombre, precio };
    agregarProdCarrito(nuevoProducto, carrito);
  }
};

programa();
console.log(carrito);
