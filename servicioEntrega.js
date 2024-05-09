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
function Cliente(nombre, email, clave, direccion, telefono) {
  Usuario.call(this, nombre, email, clave);
  this.direccion = direccion;
  this.telefono = telefono;
}

//Herencia de la entidad Usuario a la entidad Cliente
Cliente.prototype = Object.create(Usuario.prototype);
Cliente.prototype.constructor = Cliente;

//Prototipos de la entidad Cliente
Cliente.prototype.realizarPedido = function () {
  return `La funcion realizarPedido() ha sido llamada`;
};
Cliente.prototype.verHistorialPedidos = function () {
  return `La funcion verHistorialPedido() ha sido llamada`;
};

//Definicion de la entidad Repartidor
function Repartidor(nombre, email, clave, vehiculo, disponibilidad) {
  Usuario.call(this, nombre, email, clave);
  this.vehiculo = vehiculo;
  this.disponibilidad = disponibilidad;
}

//Herencia de la entidad Usuario a la entidad Repartidor
Repartidor.prototype = Object.create(Usuario.prototype);
Repartidor.prototype.constructor = Repartidor;

//Prototipos de la entidad Repartidor 
Repartidor.prototype.aceptarEnvio = function () {
  return `La funcion aceptarEnvio() ha sido llamada`;
};
Repartidor.prototype.actualizarUbicacion = function () {
  return `La funcion actualizarUbicacion() ha sido llamada`;
};
Repartidor.prototype.completarEntrega = function () {
  return `La funcion completarEntrega() ha sido llamada`;
};
Repartidor.prototype.actualizarEstado = function () {
  return `La funcion actualizarEstado() ha sido llamada`;
};

//Definicion de entidades hijas de Pedido
//Definiciòn de entidad RestauranteFisico
function RestauranteFisico(nombre, restaurante,detallesPedido,estadoPedido, direccion, menuFisico) {
  Pedido.call(this, nombre,restaurante, detallesPedido,estadoPedido);
  this.direccion = direccion;
  this.menuFisico = menuFisico;
}

//Herencia de la entidad Pedido a la entidad RestauranteFisico
RestauranteFisico.prototype = Object.create(Pedido.prototype);
RestauranteFisico.prototype.constructor = RestauranteFisico;

//Prototipos de la entidad RestauranteFisico
RestauranteFisico.prototype.eliminarPlato = function () {
  return `La funcion eliminarPlato() ha sido llamada`;
};

//Definiciòn de la entidad RestauranteDigital
function RestauranteDigital(nombre,restaurante,detallesPedido,estadoPedido,menuQR){
  Pedido.call(this, nombre,restaurante, detallesPedido,estadoPedido);
  this.menuQR = menuQR;
}

//Herencia de la entidad Pedido al entidad RestauranteDigital
RestauranteDigital.prototype = Object.create(Pedido.prototype);
RestauranteDigital.prototype.constructor = RestauranteDigital;

//Definiciòn de las entidades hijas de Plato
//Definiciòn de la entidad MenuFìsico
function MenuFisico(nombre,precio,ingredientes){
  Plato.call(this, nombre,precio,ingredientes);
}
//Herencia de la entidad Plato a la entidad MenuFisico
MenuFisico.prototype = Object.create(Plato.prototype);
MenuFisico.prototype.constructor = MenuFisico;

//Prototipos base de la entidad MenuFisico
MenuFisico.prototype.impresion = function () {
  return `La funcion impresion() ha sido llamada`;
};
MenuFisico.prototype.visualizacion = function () {
  return `La funcion visualizacion() ha sido llamada`;
};

//Definiciòn de la entidad MenuQR
function MenuQR(nombre,precio,ingredientes){
  Plato.call(this, nombre,precio,ingredientes,url);
  this.url = url;
}
//Herencia de la entidad Plato a la entidad MenuQR
MenuQR.prototype = Object.create(Plato.prototype);
MenuQR.prototype.constructor = MenuQR;

//Prototipos base de la entidad MenuQR  
MenuQR.prototype.generarQR = function () {
  return `La funcion generarQR() ha sido llamada`;
};

//Definicion de instancias
const rapi = new Repartidor('Juan','ju@gmail.com','1234','khq112',true);
console.log(rapi.autenticacion())

const menuFisicoLaGloria = new MenuFisico('La Gloria',90000,'carnes,arroz,papas');
console.log(menuFisicoLaGloria.visualizacion());