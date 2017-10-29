
    window.onload = function() {
        document.getElementById('actualizar').onclick = function  () {

          var validacionLetras=/^[A-Za-z\sáéíóúÁÉÍÓÚ]+$/;
          var validacionNumeros= /^([0-9])*$/;
          var validacionCorreo=  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          var validacionCodigoPostal=/^\d{5,6}$/;
          var validacionContrasena= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
          var validacionUsuario= /^([a-zA-Z0-9_\.\-])\w{3,}$/;

          var nombres = document.getElementById("nombres");
          var apellidos = document.getElementById("apellidos");
          var contrasenaNueva = document.getElementById("contrasenaNueva");
          var contrasenaVieja = document.getElementById("contrasenaVieja");
          var contrasenaConfirmacion = document.getElementById("contrasenaConfirmar");
          var direccion = document.getElementById("direccion");
          var codigoPostal = document.getElementById("codigoPostal");

          //Validar Nombres
            if( nombres.value == null || nombres.value.length == 0 || /^\s+$/.test(nombres.value) ) {
              swal("","El campo del nombre no puede estar vacío.","error").then(function () {
                nombres.focus();
                nombres.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("nombres"))-100);
                });
              return false;
            }else if(!validacionLetras.test(nombres.value)){
              swal("","El campo del nombre debe contener solo letras.","error").then(function () {
                nombres.focus();
                nombres.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("nombres"))-100);
                });
              return false;
            }else{
              nombres.style.backgroundColor = '#091E30';
            }

          //Validar Apellidos
            if( apellidos.value == null || apellidos.value.length == 0 || /^\s+$/.test(apellidos.value) ) {
              swal("","El campo de los apellidos no puede estar vacío.","error").then(function () {
                apellidos.focus();
                apellidos.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("apellidos"))-100);
                });
              return false;
            }else if(!validacionLetras.test(apellidos.value)){
              swal("","El campo de los apellidos debe contener solo letras.","error").then(function () {
                apellidos.focus();
                apellidos.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("apellidos"))-100);
                });
              return false;
            }else{
              apellidos.style.backgroundColor = '#091E30';
            }

            //Validar Contrasena Vieja
              if( contrasenaVieja.value == null || contrasenaVieja .value.length == 0 ) {
                swal("","Debe ingresar su contraseña anterior.","error").then(function () {
                  contrasenaVieja.focus();
                  contrasenaVieja.style.backgroundColor = '#FF0000';
                  window.scroll(0,findPos(document.getElementById("contrasenaVieja"))-100);
                  });
                return false;
              }else{
                contrasenaVieja.style.backgroundColor = '#091E30';
              }


          //Validar Contrasena Nueva
            if( contrasenaNueva.value == null || contrasenaNueva.value.length == 0 ) {
              swal("","El campo de la nueva contraseña no puede estar vacío.","error").then(function () {
                contrasenaNueva.focus();
                contrasenaNueva.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("contrasenaNueva"))-100);
                });
              return false;
            }else if(contrasenaNueva.value.length<6){
              swal("","La nueva contraseña debe ser de por lo menos 6 caracteres.","error").then(function () {
                contrasenaNueva.focus();
                contrasenaNueva.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("contrasenaNueva"))-100);
                });
              return false;
            }else if(!validacionContrasena.test(contrasenaNueva.value)){
              swal("","La contraseña debe incluir al menos 1 mayúscula, 1 minúscula y un número. No se permiten espacios en blanco.","error").then(function () {
                contrasenaNueva.focus();
                contrasenaNueva.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("contrasenaNueva"))-100);
                });
              return false;
            }else{
              contrasenaNueva.style.backgroundColor = '#091E30';
            }

          //Validar Confirmacion Contrasena
            if( contrasenaConfirmacion.value == null || contrasenaConfirmacion.value.length == 0) {
              swal("","Debes confirmar tu contraseña.","error").then(function () {
                contrasenaConfirmacion.focus();
                contrasenaConfirmacion.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("contrasenaConfirmacion"))-100);
                });
              return false;
            }else if( contrasenaNueva.value != contrasenaConfirmacion.value ) {
              swal("","Las contraseñas no coinciden.","error").then(function () {
                contrasenaConfirmacion.focus();
                contrasenaConfirmacion.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("contrasenaConfirmacion"))-100);
                });
              return false;
            }else{
              contrasenaConfirmacion.style.backgroundColor = '#091E30';
            }


            //Validar Dirección
              if( direccion.value == null || direccion.value.length == 0 || /^\s+$/.test(direccion.value) ) {
                swal("","El campo dirección no puede estar vacío.","error").then(function () {
                  direccion.focus();
                  direccion.style.backgroundColor = '#FF0000';
                  window.scroll(0,findPos(document.getElementById("direccion"))-100);
                  });
                return false;
              }else{
                direccion.style.backgroundColor = '#091E30';
              }

            //Validar Codigo Postal
              if( codigoPostal.value == null || codigoPostal.value.length == 0 || /^\s+$/.test(codigoPostal.value) ) {
                swal("","El campo del codigo postal no puede estar vacío.","error").then(function () {
                  codigoPostal.focus();
                  codigoPostal.style.backgroundColor = '#FF0000';
                  window.scroll(0,findPos(document.getElementById("codigoPostal"))-100);
                  });
                return false;
              }else if(!validacionCodigoPostal.test(codigoPostal.value)){
                swal("","El código postal introducido es inválido.","error").then(function () {
                  codigoPostal.focus();
                  codigoPostal.style.backgroundColor = '#FF0000';
                  window.scroll(0,findPos(document.getElementById("codigoPostal"))-100);
                  });
                return false;
              }else{
                codigoPostal.style.backgroundColor = '#091E30';
              }
        }
    }

    function findPos(obj) {
        var curtop = 0;
        if (obj.offsetParent) {
            do {
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
        return [curtop];
        }
    }

    function cambioFondo(obj){
      var objeto = document.getElementById(obj);
      objeto.style.backgroundColor = '#091E30';
    }
