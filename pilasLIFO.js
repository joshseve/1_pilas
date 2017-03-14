//Creo un arreglo vacío para almacenar nombres y apellidos
var nombres = [];
//Está es una función constructora sirve p/crear una pila de nombres y una pila de apellidos
function Stack(){
  var almacen = [];

 this.push = function (element){
   almacen.push(element);
 };
 this.pop = function(){
   return almacen.pop();
 };
 this.peek = function(){
   return almacen [almacen.length-1];
 };
 this.isEmpty = function(){
   return almacen.length == 0;
 };
 this.size = function(){
   return almacen.length;
 };
 this.clear = function(){
   almacen = [];
 };
 this.print = function(){
   console.log(almacen.toString());
 };
}
var nombre = new Stack();
nombre.push(" Jocelin ");
nombre.push(" Mariana ");
nombre.push(" Adriana ");
nombre.push(" Nancy ");
nombre.push(" Amalia ");

nombre.print();

var apellido = new Stack();
apellido.push(" Séptimo");
apellido.push(" Muñoz");
apellido.push(" Hernandez");
apellido.push(" Zitle");
apellido.push(" Rivera");

apellido.print();

//Puse 5 porque en este caso ya se que es menor al nunmero de elementos que tiene
//el arreglo nombre y apellido. (Tengo duda si aqui puedo ocupar SIZE para el numero de elementos).
for (var i = 0; i < 5; i++){
 nombres.push(nombre.pop() +  apellido.pop());
}

document.write(nombres);
console.log(nombres);
