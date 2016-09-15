
function validateForm(){

    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var inputEmail = document.getElementById("input-email").value;
    var inputPassword = document.getElementById("input-password").value;
    var formControl = document.querySelector("select.form-control").value;

    if(name.length == 0 && lastname.length == 0 && inputEmail.length == 0 && inputPassword.length == 0)
        alert("Ingrese los campos") 
        //Email
        var email = document.getElementById("input-email").value;
        var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (expr.test(email))
        true;
    else
        alert("La dirección de email es incorrecta.");

        //Seleccionar una opción

    if( document.querySelector("select").value == 0 )
        alert("Seleccione un tipo de Bici");

        //Contraseña
        var contra = document.getElementById("input-password").value;
    if (contra.length< 6 || (contra == "password") || (contra == "123456") || (contra=="098754")) 
        alert("Input no valido");

        // Para los campos nombre y apellido la primera letra debe ser mayúscula
        var name = document.getElementById("name").value;
        var lastname = document.getElementById("lastname").value;

        /*name*/  
    if (name.charAt(0) == name.charAt(0).toLowerCase())
        alert("La primera letra debe ser Mayuscula");
    else
            return true;
        
        /* lastname*/  
    if (lastname.charAt(0) == lastname.charAt(0).toLowerCase())
        alert("La primera letra debe ser Mayuscula");
    else
        return true;

    var expreg = /^[a-z][a-z]*/;

    if(expreg.test(name))
        true
    else
        alert("El campo nombre sólo permiten caracteres de la A-Z");  
        
    if(expreg.test(lastname))
        true    
    else
        alert("El campo apellido sólo permiten caracteres de la A-Z");
    
}contra=="098754")) {
        alert("Input no valido");
    } 
    //El valor seleccionado de bicis, debe ser una de las opciones presentadas
    if(document.querySelector("select").value == 0){
        alert("Ingresa una bicicleta");
    }
}