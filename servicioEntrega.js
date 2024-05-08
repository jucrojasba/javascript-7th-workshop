//Readme 2 - Workshop7
//Definicion de entidades principales
function ServicioDeEntregaDeComida(nombre) {
  this.nombre = nombre;
}
ServicioDeEntregaDeComida.prototype.mostrarNombre = function () {
  return this.nombre;
};

//Defincion de entidad principal Usuario
function Usuario(nombre, email, clave) {
  ServicioDeEntregaDeComida.call(this, nombre);
  this.email = email;
  this.clave = clave;
}

//Herencia de la entidad ServicioDeEntregaDeComida a la entidad Usuario
Usuario.prototype = Object.create(ServicioDeEntregaDeComida.prototype);
Usuario.prototype.constructor = Usuario;

//Prototipos Base de la entidad Usuario
Usuario.prototype.autenticacion = function () {
  return `El usuario ${this.nombre} se ha autenticado con la funcion autenticacion()`;
};

//Definicion entidad principal Pedido
function Pedido(nombre, restaurante, detallesPedido, estadoPedido) {
  ServicioDeEntregaDeComida.call(this, nombre);
  this.restaurante = restaurante;
  this.detallesPedido = detallesPedido;
  this.estadoPedido = estadoPedido;
}

//Herencia de la entidad ServicioDeEntregaDeComida a la entidad Pedido
Pedido.prototype = Object.create(ServicioDeEntregaDeComida.prototype);
Pedido.prototype.constructor = Pedido;

//Prototipos base de la entidad Pedido
Pedido.prototype.actualizarEstado = function () {
  return `La funcion actualizarEstado() ha sido llamada`;
};
Pedido.prototype.calcularTotal = function () {
  return `La funcion calcularTotal() ha sido llamada`;
};
Pedido.prototype.agregarPlato = function () {
  return `La funcion agregarPlato() ha sido llamada`;
};
Pedido.prototype.actualizarPlato = function () {
  return `La funcion actualizarPlato() ha sido llamada`;
};

//Definicion de la entidad base Plato
function Plato(nombre, precio, ingredientes) {
  ServicioDeEntregaDeComida.call(this, nombre);
  this.precio = precio;
  this.ingredientes = ingredientes;
}

//Herencia de la entidad ServicioDeEntregaDeComida a la entidad Plato
Plato.prototype = Object.create(ServicioDeEntregaDeComida.prototype);
Plato.prototype.constructor = Plato;

//Prototipos base de la entidad Plato
Plato.prototype.obtenerInfo = function () {
  return `La funcion obtenerInfo() ha sido llamada`;
};

//Definicion de entidades hijas de Usuario
//Definicion de la entidad Cliente
function Cliente(nombre, email, clave, direccion, telefono) {}
