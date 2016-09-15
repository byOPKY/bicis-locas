
function validateForm(){
     
    //1/ Todos los campos son obligatorios, excepto los dos últimos. 
    if(name.length == 0 && lastname.length == 0 && inputEmail.length == 0 && inputPassword.length == 0)
        alert("Ingrese los campos")
    //2/ Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var expreg = /^[a-z][a-z]*/;

    if(expreg.test(name))
        alert("El campo son correctos");
    else
        alert("El campo nombre sólo permiten caracteres de la A-Z");  
    
    if(expreg.test(lastname))
        alert("El campo son correctos");
    else
        alert("El campo apellido sólo permiten caracteres de la A-Z"); 


    /* Para los campos nombre y apellido la primera letra debe ser mayúscula*/
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    /*name*/  
    if (name.charAt(0) == name.charAt(0).toLowerCase()){
        alert("La primera letra debe ser Mayuscula");
    }else{
        return true;
    }
    /* lastname*/  
    if (lastname.charAt(0) == lastname.charAt(0).toLowerCase()){
        alert("La primera letra debe ser Mayuscula");
    }else{
        return true;
    }

    //4/ Validar que el campo email tenga un formato válido. Ej: name@domain.com
    var email = document.getElementById("input-email").value;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (expr.test(email))
        email = document.getElementById("input-email").value = " ";
    else
       alert("La dirección de email es incorrecta.");

    //5/ El campo password debe tener al menos 6 caracteres
    //5/ El campo password no puede ser igual a "password" ó "123456" ó "098754"
    var contra = document.getElementById("input-password").value;
    if (contra.length< 6 || (contra == "password") || (contra == "123456") || (contra=="098754")) {
        alert("Input no valido");
    } 
    //El valor seleccionado de bicis, debe ser una de las opciones presentadas
    if(document.querySelector("select").value == 0){
        alert("Ingresa una bicicleta");
    }
}