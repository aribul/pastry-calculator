var nombreIngrediente = $("#ingrediente").val();
var precio = $("#precio").val();
var cantidadNecesaria = $("#cantidad").val();
var costoFinal = 0;
var ingredienteIngresado = [ ];





//validar form

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	numeros: /^\d{1,18}(\.\d{1,2})?$/,
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});


formulario.addEventListener("submit", (e) => {
    e.preventDefault();

});


function validarFormulario(e){
   switch (e.target.name) {
       case "ingrediente": 
            validarCampo(expresiones.nombre, e.target, "ingrediente");
       break;

       case "precio": 
            validarCampo(expresiones.numeros, e.target, "precio");
       break;

       case "cantidad": 
            validarCampo(expresiones.numeros, e.target, "cantidad");
       break;
       
   }
}

function validarCampo(expresion, input, campo){ //expresion=nombre o numero. input= e.target campo= 
    if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		Ingrediente.campo = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		Ingrediente.campo = false;
	}
}






$("#calcular-boton").click(nuevoValor);



function nuevoValor(evento){

    evento.preventDefault();
   

    nombreIngrediente = $("#ingrediente").val().toLowerCase();
    precio = parseFloat($("#precio").val());
    cantidadNecesaria = parseFloat($("#cantidad").val());

    console.log(nombreIngrediente);
    console.log(precio);
    console.log(cantidadNecesaria);

    if(nombreIngrediente == "huevos"){
        divPor12();
    } else {
            divPor10();
        }
        
    console.log(ingredienteIngresado);

}

function Ingrediente(nombreIngrediente, precio, cantidadNecesaria, costoFinal){
    this.ingrediente = nombreIngrediente;
    this.precio = precio;
    this.cantidad = cantidadNecesaria;
    this.costo = costoFinal;
}

function divPor12(){
    costoFinal = parseFloat((precio/12)*cantidadNecesaria);

    var parrafo = document.createElement("p");
    var saludo = document.createTextNode("Su costo de " + nombreIngrediente + " = " + costoFinal);

    parrafo.appendChild(saludo);
    document.getElementById("producto").appendChild(parrafo);

    ingredienteIngresado.push(new Ingrediente(nombreIngrediente, precio, cantidadNecesaria, costoFinal));
}

function divPor10(){
    costoFinal = parseFloat((precio/10)*cantidadNecesaria);
    costoFinal= costoFinal*10;

    var parrafo = document.createElement("p");
    var saludo = document.createTextNode("Su costo de " + nombreIngrediente + " = " + costoFinal);

    parrafo.appendChild(saludo);
    document.getElementById("producto").appendChild(parrafo);

    ingredienteIngresado.push(new Ingrediente(nombreIngrediente, precio, cantidadNecesaria, costoFinal));
}

