//ingreso de estudiantes
let alumnos = [
  { apellido: "Albarracin", nota: 10, faltas: 10 },
  { apellido: "Amado", nota: 1, faltas: 9 },
  { apellido: "Ascara", nota: 8, faltas: 8 },
  { apellido: "Banegas", nota: 8, faltas: 7 },
  { apellido: "Bascari", nota: 2, faltas: 6 },
  { apellido: "Bravo", nota: 9, faltas: 5 },
  { apellido: "Calderon", nota: 3, faltas: 4 },
  { apellido: "Carrizo", nota: 7, faltas: 3 },
  { apellido: "Casarreta", nota: 4, faltas: 2 },
  { apellido: "Diarte", nota: 6, faltas: 1 },
  { apellido: "Diaz", nota: 8, faltas: 10 },
  { apellido: "Diez", nota: 9, faltas: 8 }
];

// agregar apellido Avellaneda nota 7 y dos inacistencias
//agregar apellido Briseño nota 9 y 9 inacistencias
//agregar apellido Cordoba nota 6 y 3 inacistencias
//agregar apellido Geronimo nota 2 y 9 inacistencias

alumnos.push({ apellido: "Avellaneda", nota: 7, faltas: 2 });
alumnos.push({ apellido: "Briseño", nota: 9, faltas: 9 });
alumnos.push({ apellido: "Cordoba", nota: 6, faltas: 3 });
alumnos.push({ apellido: "Geronimo", nota: 2, faltas: 9 });

//Se requiere saber el promedio de notas de todos los alumnos

let suma = 0;

for (let i = 0; i < alumnos.length; i++) {
  suma += alumnos[i].nota;
}

let promedio = suma / alumnos.length;

console.log("Promedio:", promedio);

//ingresar los datos de cada alumno desde prompt

let cantidad = parseInt(prompt("¿Cuántos alumnos querés ingresar?"));

for (let i = 0; i < cantidad; i++) {
  let apellido = prompt("Apellido:");
  let nota = parseInt(prompt("Nota:"));
  let faltas = parseInt(prompt("Faltas:"));

  alumnos.push({
    apellido: apellido,
    nota: nota,
    faltas: faltas
  });
}

//Se requiere saber si cada alumno aprueba con 7 o mas y queda si tiene mas de 6 inacistencias
for (let i = 0; i < alumnos.length; i++) {
  let alumno = alumnos[i];

  if (alumno.faltas > 6) {
    console.log(alumno.apellido + " queda LIBRE");
  } else if (alumno.nota >= 7) {
    console.log(alumno.apellido + " APRUEBA");
  } else {
    console.log(alumno.apellido + " DESAPRUEBA");
  }
}

