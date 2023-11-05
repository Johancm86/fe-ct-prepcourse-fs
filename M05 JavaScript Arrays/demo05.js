var nombres = ['Luciana', 'Gonzalo', 'Johan'];
console.log(nombres);

for(var i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

//forEach() primera forma (Más simple)
nombres.forEach(function(nombre) {
    console.log(nombre, 'es un bonito nombre');
})

//Segunda forma (Callback) (Más ordenada)
function mostrarNombre(nombre) {
    console.log(nombre, 'es un bonito nombre');
}
nombres.forEach(mostrarNombre);

function cantidadLetras(nombre) { //función condicional
    if(nombre.length === 7) {
        console.log(nombre, 'tiene 7 caracteres');
    }
}
nombres.forEach(cantidadLetras);

//.map
var numeros = [1, 2, 6, 9, 10];
//Primera forma
var dobles = numeros.map(function(nuevasCantidades) {
    return nuevasCantidades * 2;
})
console.log(dobles);
console.log(numeros); //vemos que .map no eliomina el arreglo sino que crea uno nuevo

//Segunda forma callback
function nombreBonito(nombre) {
    if(nombre.length === 7) {
        return 'nombre bonito';
    } else {
        return 'nombre no tan bonito';
    }
}
var cantidadLetra = nombres.map(nombreBonito);
console.log(cantidadLetra); 

//Arguments
function saludar(nombre, apellido) {
    console.log('Hola ', nombre, apellido);
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments.length);
}
saludar('Johan', 'Cárdenas');