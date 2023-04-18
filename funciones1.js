document.addEventListener("DOMContentLoaded", function(){
    let form = document.querySelector("#login-form");
    let validationCustom01 = document.querySelector("#validationCustom01");
    let validationCustom02 = document.querySelector("#validationCustom02");
    let ciudad = document.querySelector("#ciudad");
    let validationCustom05 = document.querySelector("#validationCustom05");
    let invalidCheck = document.querySelector("#invalidCheck");

    function validate(event){

    if(validationCustom01.value === ""){
        document.querySelector("#nombreHelp").innerHTML = "Nombre vacio, complete el campo por favor.";
        event.preventDefault();
    }

    if(validationCustom02.value === ""){
        document.querySelector("#apellidoHelp").innerHTML = "Apellido vacio, complete el campo por favor.";
        event.preventDefault();
    }

    if(ciudad.value === ""){
        document.querySelector("#ciudadHelp").innerHTML = "Ingrese su ciudad por favor.";
        event.preventDefault();
    }

    if(validationCustom05.value === ""){
        document.querySelector("#mensajeHelp").innerHTML = "Ingrese un mensaje por favor.";
        event.preventDefault();
    }

    if(!invalidCheck.checked){
        document.querySelector("#checkHelp").innerHTML = "Debe estar de acuerdo con los terminos y condiciones.";
        event.preventDefault();
    }
  }
  form.addEventListener("submit", validate);
}
);