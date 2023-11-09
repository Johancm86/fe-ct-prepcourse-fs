//Objetros
var usuarios = {
    nombre: 'Johan',
    edad: 37,
    email: 'johan@gmail.com',
    pais: 'Peru',
    instructor: true
}
console.log(usuarios);

//Acceder al valor
//dot
console.log(usuarios.nombre)
//bracket
console.log(usuarios['email']);
console.log(usuarios['pais']);

//Asignar y modificar valor
var password = 'hola123';
//dot, podemos agregar valor o editar valores
usuarios.telefono = 32443455
console.log(usuarios);
//bracket o corchete
usuarios['estrato'] = 3;
console.log(usuarios);
usuarios[password] = 'mail321'; //Sin comillas es una variable
console.log(usuarios);

//Eliminar valores
delete usuarios.pais; //dot
console.log(usuarios);
delete usuarios['email']; //bracket
console.log(usuarios);

//Métodos de los objetos
//Cuando creamos una función dentro del valor de un objeto, se convierte en un método
usuarios.saludar = function (nombre) {
    console.log('hola me llamo...' + nombre);
};
usuarios.saludar('Johan');
console.log(usuarios);
//hasOwnProperty, busca una propiedad en la función retornando un booleano
console.log(usuarios.hasOwnProperty('profesion'));
console.log(usuarios);
console.log(usuarios.hasOwnProperty('edad'));
console.log(usuarios);
//Object.keys, a falta de .length con éste étodo
console.log(Object.keys(usuarios));
console.log(Object.keys(usuarios).length);//Object.keys convierte en arreglo las claves, aplicando .length podemos saber cantidad de keys
//Object.values, hace lo mismo que Object.keys

//Bucle for...in, es el unico bucle que podemos usar para objetos
for (var clave in usuarios) {
    //console.log(clave); (Para ver las claves)
    //console.log(usuarios[clave]); // Para ver los valores
    if (usuarios[clave] === 34) {
        console.log('Estoy en Peru');
    } //else {
        //console.log('Estoy en otro lado')// si lo ponemos dentro de for el mensaje aparece en cada iteracion
}

//this representa al objeto del cual se esta haciendo el llamado del valor de la clave
usuarios.saludar = function () {
    console.log('hola me llamo ' + this.nombre + ' mi edad es ' + this.edad);
};
//usuarios.saludar();

usuarios.despedir = function () {
    this.saludar = function () {
        console.log('chau me voy');
    };
    this.nombre = 'Gonzalo'; //Modificamos valores
    this.profesion = 'developer'; //Asignamos claves y valores
};

usuarios.despedir(); //Con this puedo modificar métodos y claves o propiedades
usuarios.saludar();

console.log(usuarios)


