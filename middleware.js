var express = require('express');
var app = express();

var mid=((req,res,next)=>{
    console.log("Middleware para todas las rutas");
    next();
    
});
//exportamos la variable para mandarlo a routes
module.exports = mid;