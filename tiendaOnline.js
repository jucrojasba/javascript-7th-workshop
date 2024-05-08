//Readme2 - workshop 7

//Definicion de entidades principales
function tiendaPuntosOnline(nombre) {
  this.nombre = nombre;
}
tiendaPuntosOnline.prototype.mostrarNombre = function () {
  console.log(this.nombre);
};

//Definicion de entidad principal producto
function producto(
  nombre,
  direccion,
  puntosNecesarios,
  cantidadDisponible,
  stock,
  precio
) {
  tiendaPuntosOnline.call(this, nombre);
  this.direccion = direccion;
  this.puntosNecesarios = parseFloat(puntosNecesarios);
  this.cantidadDisponible = parseFloat(cantidadDisponible);
  this.stock = parseFloat(stock);
  this.precio = parseFloat(precio);
}
//Herencia de los mètodos de la entidad principal tiendaPuntosOnline al objeto Producto
producto.prototype = Object.create(tiendaPuntosOnline.prototype);
producto.prototype.constructor = producto;

//Prototipos Base del objeto Productos
producto.prototype.listarProductos = function () {
  return `La funcion de listarProductos() ha sido llamada`;
};
producto.prototype.obtenerInfo = function () {
  return `La funcion de obtenerInfo() ha sido llamada`;
};
producto.prototype.actualizarStock = function () {
  return `La funcion de actualizarStock() ha sido llamada`;
};

//Definicion de entidad principal Usuario
function usuario(nombre, email, clave) {
  tiendaPuntosOnline.call(this, nombre);
  this.email = email;
  this.clave = clave;
}

//Herencia de los mètodos de la entidad principal tiendaPuntosOnline al objeto usuario
usuario.prototype = Object.create(tiendaPuntosOnline.prototype);
usuario.prototype.constructor = usuario;

//Definicion de las entidades hijas de Producto
//Definicion de la entidad ProductoFisico
function productoFisico(
  nombre,
  direccion,
  puntosNecesarios,
  cantidadDisponible,
  stock,
  precio
) {
  producto.call(
    this,
    nombre,
    direccion,
    puntosNecesarios,
    cantidadDisponible,
    stock,
    precio
  );
}

//Herencia de los mètodos de la entidad Producto al objeto ProductoFisico
productoFisico.prototype = Object.create(producto.prototype);
productoFisico.prototype.constructor = productoFisico;

//Prototipos del objeto ProductoFisico
productoFisico.prototype.enviarProducto = function () {
  return `La funcion de enviarProducto() ha sido llamada`;
};

//Definicion de la entidad ProductoDigital
function productoDigital(
  nombre,
  direccion,
  puntosNecesarios,
  cantidadDisponible,
  stock,
  precio,
  url
) {
  producto.call(
    this,
    nombre,
    direccion,
    puntosNecesarios,
    cantidadDisponible,
    stock,
    precio
  );
  this.url = url;
}

//Herencia de los mètodos de la entidad Producto al objeto ProductoDigital
productoDigital.prototype = Object.create(producto.prototype);
productoDigital.prototype.constructor = productoDigital;

//Prototipos del objeto ProductoDigital
productoDigital.prototype.obtenerProductoEmail = function () {
  return `La funcion de obtenerProductoEmail() ha sido llamada`;
};
productoDigital.prototype.descargar = function () {
  return `La funcion de descargar() ha sido llamada con el nombre de producto ${this.nombre}, la direccion ${this.direccion}, los puntos necesarios ${this.puntosNecesarios}, la cantidad disponible ${this.cantidadDisponible}, el stock ${this.stock}, el precio ${this.precio} y la url ${this.url}`;
};

//Definicion de las entidades hijas de Usuario
//Definicion de la entidad administrador
function administrador(nombre, email, clave) {
  usuario.call(this, nombre, email, clave);
}

//Herencia de la entidad Usuario
administrador.prototype = Object.create(usuario.prototype);
administrador.prototype.constructor = administrador;

//Prototipos del objeto administrador
administrador.prototype.agregarProductos = function () {
  return `La funcion agregarProductos() ha sido llamada`;
};
administrador.prototype.modificarProductos = function () {
  return `La funcion modificarProductos() ha sido llamada`;
};
administrador.prototype.eliminarUsuario = function () {
  return `La funcion eliminarUsuario() ha sido llamada`;
};

//Definicion de la entidad cliente
function cliente(nombre, email, clave, puntosAcumulados) {
  usuario.call(this, nombre, email, clave);
  this.puntosAcumulados = puntosAcumulados;
}

//Herencia de la entidad Usuario
cliente.prototype = Object.create(usuario.prototype);
cliente.prototype.constructor = cliente;

//Prototipos del objeto cliente
cliente.prototype.acumularPuntos = function () {
  return `La funcion acumularPuntos() ha sido llamada`;
};
cliente.prototype.canjearPuntos = function () {
  return `La funcion canjearPuntos() ha sido llamada`;
};

//Definicion de las entidades hijas de Cliente
//Definicion de la entidad Actividad
function actividad(nombre, tipo, puntosOtorgados) {
  cliente.call(this, nombre);
  this.tipo = tipo;
  this.puntosOtorgados = puntosOtorgados;
}

//Herencia de la entidad cliente
actividad.prototype = Object.create(cliente.prototype);
actividad.prototype.constructor = actividad;

//Prototipos del objeto Actividad
actividad.prototype.completarActividad = function () {
  return `La funcion completarActividad() ha sido llamada`;
};

//Definicion de la entidad OrdenDeCanje
function ordenDeCanje(nombre, producto, fecha) {
  cliente.call(this, nombre);
  this.producto = producto;
  this.fecha = fecha;
}

//Herencia de la entidad cliente
ordenDeCanje.prototype = Object.create(cliente.prototype);
ordenDeCanje.prototype.constructor = ordenDeCanje;

//Prototipos del objeto OrdenDeCanje
ordenDeCanje.prototype.confirmarOrden = function () {
  return `La funcion confirmarOrden() ha sido llamada a nombre de ${this.nombre} en la fecha ${this.fecha} para el producto ${this.producto}`;
};
ordenDeCanje.prototype.cancelarOrden = function () {
  return `La funcion cancelarOrden() ha sido llamada a nombre de ${this.nombre} en la fecha ${this.fecha}para el producto ${this.producto}`;
};

//Creaciòn de instancias para probar algunos metodos de algunas entidades

const cambiarSombrilla = new ordenDeCanje("Juan", "Sombrilla", "20/12/2023");
const Sombrilla = new productoDigital(
  "Sombrilla",
  "Cll65 #80A - 95",
  20,
  10,
  6,
  80000,
  "json.dat"
);

console.log(cambiarSombrilla.confirmarOrden());
console.log(Sombrilla.descargar());
