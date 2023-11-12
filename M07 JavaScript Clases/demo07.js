//clases
//primera forma (funcion constructora)
function Carro(marca, color, precio) {
   this.marca = marca;
   this.color = color;
   this.precio = precio;
   this.identificacion = function () {
    return 'hola soy un ' + this.marca + ' y valgo ' + this.precio;
  };
}

//instancia
var auto1 = new Carro('Audi', 'Azul', 15000);

console.log(auto1.color);
console.log(auto1.marca);
console.log(auto1.identificacion());

var auto2 = new Carro('Nissan', 'Gris', 20000);
console.log(auto2.identificacion());

console.log(auto1);
console.log(auto2);

//segunda forma (clase)

class Moto {
  constructor(marca, color, precio) {
    this.marca = marca;
    this.color = color;
    this.precio = precio;
  };

  identificacion = function () {
    return 'hola soy un ' + this.marca + ' y valgo ' + this.precio;
  };
}

// instancia
var auto3 = new Moto('Renault', 'blanco', 6000);
var auto4 = new Moto('Ferrari', 'rojo', 60000);

console.log(auto4.identificacion());

//Prototipo

Moto.prototype.modelo = function () {
  console.log('hola soy ' + this.marca + ' del año 2023');
};
console.log(auto3.modelo());

//Herencia

class Animal {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
  }

  saludar() {
    console.log('hola me llamo ' + this.nombre);
  }
}

var caballito = new Animal('Manolo', 'mamifero')

console.log(caballito);
console.log(caballito.saludar());

// //clase que herede de Animal

class Gato extends Animal {
 constructor(nombre, especie, color, peso) {
    super(nombre, especie);
    this.color = color;
    this.peso = peso;
  }

  maullar() {
    console.log('Meow!');
  }
}

var gato1 = new Gato('Michi', 'mamifero', 'negro', 5)
console.log(gato1);

console.log(gato1.color);
console.log(gato1.peso);
console.log(gato1.especie);

gato1.maullar();
gato1.saludar();

//callbacks

function decirHolaAlUsuario(usuario) {
  return 'Hola ' + usuario + '!';
}

function decirAdiosAlUsuario(usuario) {
  return 'Adios ' + usuario + '!';
}

function crearSaludo(usuario, cb) {
  return cb(usuario);
}

console.log(crearSaludo('Daniel', decirAdiosAlUsuario));

console.log(crearSaludo('Angel', decirHolaAlUsuario));