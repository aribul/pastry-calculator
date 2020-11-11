$(document).ready(mostrarJson);


function mostrarJson(){
 $.ajax({
    url: "./productos.json",
    type: "GET",
    dataType: "json"
}).done( function(resultadoJson) {

    for (var i = 0; i < resultadoJson.length; i++) {

        console.log(resultadoJson[i].nombre);
    }

    //$("#producto").append("<p>Los productos fueron cargados con éxito</p>");

}).fail( function(xhr, status, error) {      
    console.log(xhr);
    console.log(status);
    console.log(error);
})           

}