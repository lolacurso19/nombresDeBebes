// jshint esversion:6

// inicializo express
const express=require("express");
const app=express();


// Inicializo body-parser
const bodyParset=require("body-parser");
app.use(bodyParset.urlencoded({extended:true}));

// activo carpeta public para arhivos estaticos
app.use(express.static(__dirname + "/public/"));

// seccion de rutas
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
// recogo los valoes que envian desde el formulario

var sexo=(req.body.sexo);
var apellidoPaterno=(req.body.aPadre);
var apellidoMaterno=(req.body.aMadre);
// declaro 2 arrays de nombres
var nombresNene=["Andres","Julian","Pelayo","Martin","Rodrigo","Sergio", "Héctor"];
var nombresNena=["Jimena","Zahira","Sandra","Laura","Nerea","Anjana","María"];
// Escogemos aleatoriamente un nombre
//1- Genero un numero aleatorio entre 0 y x-1, siendo
//  x el numero de nombres total del que dispongo(6 --nombres)
// sacamos la parte entera del numero..
var posicion=Math.floor(Math.random()*nombresNene.length);
console.log(posicion);
// comprobamos si es niño o niña y respondemos el nombres
res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});//PARA QUE RECONOZCA LOS ACENTOS
 res.write("<h1> Enhorabuena!!!</h1>");
 if (sexo==="1"){
//   //es niño
     res.write("<h2> Puedes llamarle " +nombresNene[posicion]+" "+ apellidoPaterno+ " "+ apellidoMaterno +"</h2>");
 }
 if (sexo==="2"){
 //   //es niño
     res.write("<h2> Puedes llamarle " +nombresNena[posicion]+" "+ apellidoPaterno+ " "+ apellidoMaterno +"</h2>");
 }
res.send();

});



//Arranca el servidor
app.listen(3000,function(){
console.log("El servidor escuchando en puerto 3000.");

});
