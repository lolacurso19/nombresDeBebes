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
console.log(req.body);
var sexo=(req.body.sexo);
var apellidoPaterno=(req.body.aPadre);
var apellidoMaterno=(req.body.aMadre);

});



//Arranca el servidor
app.listen(3000,function(){
console.log("El servidor escuchando en puerto 3000.");

});
