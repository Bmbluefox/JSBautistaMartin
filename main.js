const SumaDosValores = (a , b) => {
return  a + b;
}
let c = SumaDosValores(4,9);
console.log(c);

let nombre;

nombre = prompt("cual es tu nombre?");
if(nombre === null){
  nombre = "invitado";
}
alert("Hola " + nombre);
console.log("Hola " + nombre);


console.log("función comparación numeros")
function MayorMenor(num1,num2) {
 if(num1 < num2){
  console.log(num1 + " es menor que " + num2);
 }else if(num1 > num2){
  console.log(num1 + " es mayor que " + num2);
 }else if(num1 === num2){
  console.log("Son el mismo numero");
 }
}
MayorMenor(3,3);

let paridad;

paridad = prompt("ingrese un numero:");
ParOImpar(paridad);

 function ParOImpar(x){
  if (x === null){
    console.log("No ingreso un numero");
    alert("No ingreso un numero");
  }else if(x % 2 === 0){
    alert("Su numero es par");
    console.log("Su numero es par");
  }else{
    alert("Su numero es impar")
    console.log("Su numero es impar");
  }
 }
let i = 10;
 while(i > 0){
console.log(i);
i= i - 1
 }
let numero1;
 do{
  numero1 = prompt("ingrese un numero mayor a 100:")
 }while(numero1 < 100);
 console.log("ingresaste un numero mayor a 100:" + numero1);
let paridad2;
 function ParOImpar2(y){
  if (y % 2 > 0){
   paridad2 = false
  }else if(y % 2 === 0){
    paridad2 = true
  }
  console.log("El número " + y + " es par: " + paridad2)
}
ParOImpar2(3);

function CelsiustoF(celcius){
  let fare = (celcius * 1.8) + 32 ;
  console.log(celcius + "℃ son equivalentes a " + fare + "℉");
}
CelsiustoF(30);

let persona = {
    nombre: "Bautista",
    edad: 22 ,
    ciudad: "mendoza",
    cambiarCiudad: function(nuevaCiudad) {
      this.ciudad = nuevaCiudad 
    },
}
console.log(persona);
persona.cambiarCiudad("Buenos Aires");
console.log(persona);

let libro = {
  titulo: "ShadowHunters" ,
  autor: "Cassandra Clare" ,
  lanzamiento: 2015,

  antiguedadLibro: function() {
    if (this.lanzamiento < 2014){
      console.log("este libro es antiguo");
    }else{console.log("este libro es reciente")}
  }
}
console.log(libro);
libro.antiguedadLibro();
