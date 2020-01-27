//validacion formulario contacto.html
$(document).ready(function(){
        $("button").click(function(){

            var mensajes = "";
                   var nombre = document.getElementById("nombre");
                   var apellido = document.getElementById("apellido");
                   var email = $("input[id='email']");
                   var tlf = $("input[id='tlf']");
                   var dni = $("input[id='dni']");
                   var any = $("input[id='any']");
                   var provincias = $("select");
                   var mensaje = document.getElementById("mensaje");


                   if(nombre.value == ""){
                       mensajes = "Rellena el campo Nombre<br>";
                       nombre.style.border = "1px solid red";
                       nombre.classList.add("placeholder_val_ko");
                       nombre.classList.remove("placeholder_val_ok");
                       document.getElementsByClassName("result_nombre")[0].innerHTML = mensajes;
                   }else{
                       nombre.removeAttribute("style");
                       nombre.classList.add("placeholder_val_ok");
                       nombre.classList.remove("placeholder_val_ko");
                       mensajes = "";
                       document.getElementsByClassName("result_nombre")[0].innerHTML = mensajes;
                   }

                   if(apellido.value == ""){
                       mensajes = "Rellena el campo Apellido<br>";
                       apellido.style.border = "1px solid red";
                       apellido.classList.add("placeholder_val_ko");
                       apellido.classList.remove("placeholder_val_ok");
                       document.getElementsByClassName("result_apellido")[0].innerHTML = mensajes;
                   }else{
                       apellido.removeAttribute("style");
                       apellido.classList.add("placeholder_val_ok");
                       apellido.classList.remove("placeholder_val_ko");
                       mensajes = "";
                       document.getElementsByClassName("result_apellido")[0].innerHTML = mensajes;
                   }

                  if(email.val() == ""){
                      mensajes = "Rellena el campo Email<br>";
                      email.css("border","1px solid red");
                      email.addClass("placeholder_val_ko");
                      email.removeClass("placeholder_val_ok");
                      $(".result_email").html(mensajes);

                  }else if(!email_validar(email.val())){
                      mensajes = "El email no cumple el formato nombre@dominio.ext)<br>";
                      email.css("border","1px solid red");
                      email.css("color","red");
                      $(".result_email").html(mensajes);
                  }else{
                      email.removeAttr("style");
                      email.addClass("placeholder_val_ok");
                      email.removeClass("placeholder_val_ko");
                      mensajes = "";
                      $(".result_email").html(mensajes);
                  }

                  if(tlf.val() == ""){
                      mensajes = "Rellena el campo Teléfono<br>";
                      tlf.css("border","1px solid red");
                      tlf.addClass("placeholder_val_ko");
                      tlf.removeClass("placeholder_val_ok");
                      $(".result_tlf").html(mensajes);

                  }else if(!telefono_validar(tlf.val())){
                      mensajes = "El teléfono no tiene el formato (9/7/6xxxxxxxx)<br>";
                      tlf.css("border","1px solid red");
                      tlf.css("color","red");
                      $(".result_tlf").html(mensajes);
                  }else{
                      tlf.removeAttr("style");
                      tlf.addClass("placeholder_val_ok");
                      tlf.removeClass("placeholder_val_ko");
                      mensajes = "";
                      $(".result_tlf").html(mensajes);
                  }

                  if(dni.val() == ""){
                      mensajes = "Rellena el campo DNI<br>";
                      dni.css("border","1px solid red");
                      dni.addClass("placeholder_val_ko");
                      dni.removeClass("placeholder_val_ok");
                      $(".result_dni").html(mensajes);

                  }else if(!dni_validar(dni.val())){
                      mensajes = "El DNI introducido no es correcto<br>";
                      dni.css("border","1px solid red");
                      dni.css("color","red");
                      $(".result_dni").html(mensajes);
                  }else{
                      dni.removeAttr("style");
                      dni.addClass("placeholder_val_ok");
                      dni.removeClass("placeholder_val_ko");
                      mensajes = "";
                      $(".result_dni").html(mensajes);
                  }

                   if(any.val() == ""){
                       mensajes = "Rellena el campo Año de Nacimiento<br>";
                       any.css("border","1px solid red");
                       any.addClass("placeholder_val_ko");
                       any.removeClass("placeholder_val_ok");
                       $(".result_any").html(mensajes);

                   }else if(any.val()>2002){
                       mensajes = "Eres menor de edad<br>";
                       any.css("border","1px solid red");
                       any.css("color","red");
                       $(".result_any").html(mensajes);
                   }else{
                       any.removeAttr("style");
                       any.addClass("placeholder_val_ok");
                       any.removeClass("placeholder_val_ko");
                       mensajes = "";
                       $(".result_any").html(mensajes);
                   }

                   if(provincias.val() == "[Selecciona]"){
                       mensajes = "Rellena la provincia<br>";
                       provincias.css("border","1px solid red");
                       provincias.addClass("placeholder_val_ko");
                       provincias.removeClass("placeholder_val_ok");
                       $(".result_provincias").html(mensajes);

                     }else{
                       provincias.removeAttr("style");
                       provincias.addClass("placeholder_val_ok");
                       provincias.removeClass("placeholder_val_ko");
                       mensajes = "";
                       $(".result_provincias").html(mensajes);
                   }

                   if(mensaje.value == ""){
                       mensajes = "Rellena el campo Mensaje<br>";
                       mensaje.style.border = "1px solid red";
                       mensaje.classList.add("placeholder_val_ko");
                       mensaje.classList.remove("placeholder_val_ok");
                       document.getElementsByClassName("result_mensaje")[0].innerHTML = mensajes;
                   }else{
                       mensaje.removeAttribute("style");
                       mensaje.classList.add("placeholder_val_ok");
                       mensaje.classList.remove("placeholder_val_ko");
                       mensajes = "";
                       document.getElementsByClassName("result_mensaje")[0].innerHTML = mensajes;
                   }

        });
});


/*
* @name: telefono_validar
* @author: marouane boutaleb
* @versio: 1.0
* @description: Valida un formato de teléfono mediante RegExp
* @date: 26/1/20
* @params: tlf.val()
* @return: true/false
*/
function telefono_validar(tlf){
    var patt = new RegExp(/^[9|7|6]{1}([\d]{2}[-]*){3}[\d]{2}$/);
    return patt.test(tlf);
}

/*
* @name: email_validar
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: Valida un formato de un email mediante RegExp
* @date: 08/1/20
* @params: email.val()
* @return: true/false
*/
function email_validar(email){
    var patt = new RegExp(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    return patt.test(email);
}
/*
* @name: dni_validar
* @author: Clase CIFO VIOLETA
* @versio: 1.0
* @description: Valida un formato de DNI mediante RegExp
* @date: 09/1/20
* @params: dni.val()
* @return: true/false
*/
function dni_validar(dni){
    var patt = new RegExp(/^\d{8}[a-zA-Z]$/);
    var numero;
    var letr;
    var letra;

    if(patt.test(dni)){
        numero = dni.substr(0,dni.length-1);
        letr = dni.substr(dni.length-1,1);
        numero = numero % 23;
        letra='TRWAGMYFPDXBNJZSQVHLCKET';
        letra=letra.substring(numero,numero+1);
        if (letra!=letr.toUpperCase()) {
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
}
// validacion y ajax log/register
$(document).ready(function() {
    $("#registre").submit(function(event) {
        // método AJAX de jQuery
        $.ajax({
            // config. de datos de envío
            type: 'POST',
            url: 'php/backend.php',
            dataType: 'json',
            data: $("#registre").serialize(),
            // control de acciones en el envio y respuesta del server
            success: function(ajax_regi){
                $("#ajax_regi").html(ajax_regi);
            },
            beforeSend: function(){
                $("#ajax_regi").html('<i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>');
                //$("#ajax_regi").html('bien');
            },
            error: function(){
                $("#ajax_regi").html('Error en la comunicación con el servidor');
            }
        });
        event.preventDefault();
    });
   //formulario del login
   $("#login").submit(function(event) {
       // método AJAX de jQuery
       $.ajax({
           // config. de datos de envío
           type: 'POST',
           url: 'php/backend.php',
           dataType: 'json',
           data: $("#login").serialize(),
           // control de acciones en el envio y respuesta del server
           success: function(ajax_login){
               $("#ajax_login").html(ajax_login);
           },
           beforeSend: function(){
               $("#ajax_login").html('<i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>');
               //$("#ajax_regi").html('bien');
           },
           error: function(){
               $("#ajax_login").html('Error en la comunicación con el servidor');
           }
       });
       event.preventDefault();
   });


  });

//
window.onload = function() {
    // validació del formulari de registre amb API de validació d'HTML5
    var registre = document.getElementsByTagName("form")[0];
    var reg_email = document.getElementById("reg_email");
    var reg_pass = document.getElementById("reg_pass");
    var reg_r_pass = document.getElementById("reg_r_pass");
    var error = document.getElementsByClassName("error");
    var login=document.getElementById("#login");
    var registre=document.getElementById("#registre");
    login.style.display = "none";
    registre.style.display = "block";

    // validació del correu electrònic
    reg_email.addEventListener("keyup", function(){
        if(reg_email.validity.valid){
            error[0].innerHTML = "";
            reg_email.className = "";
        }
    }, false);

    // validació de la paraula de pas
    reg_pass.addEventListener("keyup", function(){
        if(reg_pass.validity.valid){
            error[1].innerHTML = "";
            reg_pass.className = "";
        }
    }, false);

    // validació per la repetició de la paraula de pas
    reg_r_pass.addEventListener("keyup", function(){
        if(reg_r_pass.value == reg_pass.value){
            error[2].innerHTML = "";
            reg_r_pass.className = "";
        }
    }, false);

    registre.addEventListener("submit", function(event){
        if(reg_email.value == ""){
            error[0].innerHTML = "Rellena el campo email";
            reg_email.className = "invalid";
        } else if(!reg_email.validity.valid){
            error[0].innerHTML = "El email tiene un formato incorrecto";
            reg_email.className = "invalid";
        }

        if(reg_pass.value == ""){
            error[1].innerHTML = "Rellena el campo contraseña";
            reg_pass.className = "invalid";
        } else if(!reg_pass.validity.valid){
            error[1].innerHTML = "La contraseña es demasiado corta";
            reg_pass.className = "invalid";
        }

        if(reg_r_pass.value == ""){
            error[2].innerHTML = "Rellena el campo Repetir contraseña";
            reg_r_pass.className = "invalid";
        } else if(reg_r_pass.value != reg_pass.value){
            error[2].innerHTML = "Las contraseñas no coinciden";
            reg_r_pass.className = "invalid";
        }

        if (reg_email.className == "invalid"
        ||  reg_pass.className == "invalid"
        ||  reg_r_pass.className == "invalid"){
            event.preventDefault();
        } else {
            alert("El usuario se ha registrado correctamente");
        }

    }, false);
};

$(document).ready(function(){
    // validació del formulari de login amb jQuery
    var boto = $("input[type=button]");
    var lg_email = $("#lg_email");
    var lg_pass = $("#lg_pass");
    var errorEmail = $(".error").get(3);
    var errorPass = $(".error").get(4);

    // validació del correu electrònic
    lg_email.on("keyup", function(){
        if(lg_email.val() != "" && email_validar(lg_email.val())){
            $(errorEmail).html("");
            lg_email.removeClass("invalid");
        }
    });

    // validació de la paraula de pas
    lg_pass.on("keyup", function(){
        if(lg_pass.val() != "" && lg_pass.val().length > 5){
            $(errorPass).html("");
            lg_pass.removeClass("invalid");
        }
    });

    boto.on("click", function(){
        if(lg_email.val() == ""){
            $(errorEmail).html("Rellena el email");
            lg_email.addClass("invalid");
        } else if(!email_validar(lg_email.val())){
            $(errorEmail).html("El email tiene un formato incorrecto");
            lg_email.addClass("invalid");
        }

        if(lg_pass.val() == ""){
            $(errorPass).html("Rellena el campo contraseña");
            lg_pass.addClass("invalid");
        } else if(lg_pass.val().length < 6){
            $(errorPass).html("La contraseña es demasiado corta");
            lg_pass.addClass("invalid");
        }

        if ($(errorEmail).html() == ""
        &&  $(errorPass).html() == ""){
            alert("El usuario ha entrado correctamente");
        }

    });
});

function mostrar_login(){
    $("#registre").hide();
    $("#login").fadeIn(750);
}

function mostrar_reg(){
    $("#login").hide();
    $("#registre").fadeIn(750);
}

function email_validar(email){
    var patt = new RegExp(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    return patt.test(email);
}
