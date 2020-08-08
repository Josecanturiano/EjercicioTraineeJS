//Definimos las clases y sus metodos

class moto {
  constructor(marca, modelo, cilindrada, precio) {
      //llenamos nuestro objeto
    this.marca = marca;
    this.modelo = modelo;
    this.cilindrada = cilindrada;
    this.precio = precio;
  }

  getInfo() {
      //retornamos un string listo para imprimir
    return `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${
      this.cilindrada
    } // Precio: ${new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(this.precio)}`;
  }
}
//hacemose exactamente lo mismo con segunda clase
class auto {
  constructor(marca, modelo, puertas, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.puertas = puertas;
    this.precio = precio;
  }
  getInfo() {
    return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${
      this.puertas
    } // Precio: ${new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(this.precio)}`;
  }
}

//creamos los objetos correspondientes puesto que no habra entrada de ningun tipo por pantalla

let peugeot206 = new auto("Peugeot", "206", 4, 200000);
let honda = new moto("Honda", "Titan", "125c", 60000);
let peugeot208 = new auto("Peugeot", "208", 5, 250000);
let yamaha = new moto("Yamaha", "YBR", "160c", 80500.5);

//llenamos nuestro array con los datos correspondientes

var vehiculos = [peugeot206, honda, peugeot208, yamaha];

//El primer lo realizamos iterando sobre cada elemento y llamando el metodo de cada uno de los objetos

vehiculos.map((obj) => {
  console.log(obj.getInfo());
});
console.log("=============================");

//usando el metodo de array sort ordenamos los vehiculos por el precio para obtener el mas caro en la primera posicion
max = vehiculos.sort((a, b) => b.precio - a.precio);

console.log(`Vehiculo mas caro: ${max[0].marca} ${max[0].modelo}`);

//hacemos lo mismo pero inverso para encontrar el mas barato en la primera posicion
min = vehiculos.sort((a, b) => a.precio - b.precio);

console.log(`Vehiculo mas barato: ${min[0].marca} ${min[0].modelo}`);

//usando el metodo filter de array filtramos en todos los objetos a ver cual contiene la letra correspondiente
//en caso de que haya mas de una se itera para imprimirlas todas
withYLetter = vehiculos.filter((x) => x.marca.indexOf("Y") >= 0);
withYLetter.map((x) => {
  console.log(
    `Vehículo que contiene en el modelo la letra ‘Y’: ${x.marca} ${x.modelo}`
  );
});
console.log("=============================");
// Y para finalizar usamos los antes visto, ordenamos por precio y luego iteramos e imprimos
vehiculos
  .sort((a, b) => b.precio - a.precio)
  .map((x) => {
    console.log(`${x.marca} ${x.modelo}`);
  });

// Y eso es todo, muchas gracias y espero su respuesta.
