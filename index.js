//crear un algoritmo con un if, un loop, codigo interactivo
//usar funciones
//calculadora promedio final alumnos

// let hola = ""
// function promiedos () {
//     hola = prompt("hola")
// }
// promiedos()
// console.log(hola)


const nombreAlumno = prompt("Ingrese el nombre del estudiante: ")
const parciales = parseInt(prompt("Ingrese numero de parciales: "))
let nota = 0
let parcialesCheck = true

if (parciales <= 0) {
    parcialesCheck = false
}
function promedio (parciales) {
    if (parcialesCheck == true) {
    for (let i = 1; i <= parciales; i++){
        nota = nota + parseInt(prompt("Ingrese la nota numero" + " " + i))
        if (i == parciales) {
            nota = nota/parciales
        }
    }
  }
  else {
    console.log(nombreAlumno + " " + "no ha tomado parciales")
  }
}

function promocion (nota) {
    if (parcialesCheck == true) {
    if (nota >= 6.5) {
        console.log("Felicitaciones, el estudiante "  + nombreAlumno + " " + "promociono la materia")
    }
    else if ((nota < 6.5) && (nota >= 4 )) {
        console.log("El estudiante " + nombreAlumno + " " + "tendra que rendir el final")
    }
    else {
        console.log("El estudiante " + nombreAlumno + " " + "debera recursar la materia")
    }
  }
}

promedio(parciales)
if (parcialesCheck == true) {
console.log(nombreAlumno + " " + "tiene un promedio de: " + nota)
}
promocion(nota)