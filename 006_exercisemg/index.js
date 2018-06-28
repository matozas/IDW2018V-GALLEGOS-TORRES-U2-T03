

var fs = require("fs");
var arreglo = [];


//function jsontoarray(){
    var Json = fs.readFileSync("consulta.json")
    //console.log(Json + "");

    //Lo parseamos para convertirlo en objeto
    var types = JSON.parse(Json);
    
    
    //Y lo recorremos
    for(var x=0; x<types.length; x++) {
        arreglo.push(types[x]);
        
    }
      
    console.log(arreglo);


    var cad;
    
 module.exports = function posArray(pos){
        
        return cad = arreglo[pos];
        
    }
   
    
    

