//Este es el JSON que recibes
//var json = '[{"id":1,"description":"DESC1"},{"id":2,"description":"DESC2"},{"id":3,"description":"DESC3"}]';
var fs = require("fs");
var Json = fs.readFileSync("consulta.json")
console.log(Json+"");


//Lo parseamos para convertirlo en objeto
var types = JSON.parse(Json);
console.log(types)

 
//Y lo recorremos
for(x=0; x<types.length; x++) {
    console.log(types[x].id);
    console.log(types[x].description);
}


