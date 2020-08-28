var express = require('express');
const port = process.env.PORT || 3000;
var app = express();

app.get('/',function(req,res){
    console.log("FUNCIONA CORRECTAMENTE");
    res.send('HELLO WORLD');
})

app.listen(port,()=>{
    console.log("SERVIDOR ESCUCHANDO EN PUERTO " + port);
})