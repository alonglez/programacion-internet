
    window.onload = function() {
        document.getElementById('registrar').onclick = function  () {

          var validacionLetras=/^[A-Za-z\sáéíóúÁÉÍÓÚ]+$/;
          var validacionNumeros= /^([0-9])*$/;
          var validacionCorreo=  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          var validacionCodigoPostal=/^\d{5,6}$/;
          var validacionContrasena= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
          var validacionUsuario= /^([a-zA-Z0-9_\.\-])\w{3,}$/;

          var nombres = document.getElementById("nombres");
          var apellidos = document.getElementById("apellidos");
          var usuario = document.getElementById("usuario");
          var contrasena = document.getElementById("contrasena");
          var contrasenaConfirmacion = document.getElementById("contrasenaConfirmacion");
          var correo = document.getElementById("correo");
          var correoConfirmacion = document.getElementById("correoConfirmacion");
          var direccion = document.getElementById("direccion");
          var codigoPostal = document.getElementById("codigoPostal");

          //Validar Nombres
            if( nombres.value == null || nombres.value.length == 0 || /^\s+$/.test(nombres.value) ) {
              swal("","El campo del nombre no puede estar vacío.","error").then((value) => {
                nombres.focus();
                nombres.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("nombres"))-100);
                });
              return false;
            }else if(!validacionLetras.test(nombres.value)){
              swal("","El campo del nombre debe contener solo letras.","error").then((value) => {
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
              swal("","El campo de los apellidos no puede estar vacío.","error").then((value) => {
                apellidos.focus();
                apellidos.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("apellidos"))-100);
                });
              return false;
            }else if(!validacionLetras.test(apellidos.value)){
              swal("","El campo de los apellidos debe contener solo letras.","error").then((value) => {
                apellidos.focus();
                apellidos.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("apellidos"))-100);
                });
              return false;
            }else{
              apellidos.style.backgroundColor = '#091E30';
            }

            //Validar Usuario
              if( usuario.value == null || usuario.value.length == 0 || /^\s+$/.test(usuario.value)  ) {
                swal("","El nombre de usuario no puede estar vacío.","error").then((value) => {
                  usuario.focus();
                  usuario.style.backgroundColor = '#FF0000';
                  window.scroll(0,findPos(document.getElementById("usuario"))-100);
                  });
                return false;
              }else if(usuario.value.length<4){
                swal("","El nombre de usuario debe ser de por lo menos 4 caracteres.","error").then((value) => {
                  usuario.focus();
                  usuario.style.backgroundColor = '#FF0000';
                  window.scroll(0,findPos(document.getElementById("usuario"))-100);
                  });
                return false;
              }else if(!validacionUsuario.test(usuario.value)){
                swal("","El nombre de usuario admite solo letras mayúsculas, minúsculas, números y guiones bajos.","error").then((value) => {
                  usuario.focus();
                  usuario.style.backgroundColor = '#FF0000';
                  window.scroll(0,findPos(document.getElementById("usuario"))-100);
                  });
                return false;
              }else{
                usuario.style.backgroundColor = '#091E30';
              }

          //Validar Contrasena
            if( contrasena.value == null || contrasena.value.length == 0 ) {
              swal("","El campo de la contraseña no puede estar vacío.","error").then((value) => {
                contrasena.focus();
                contrasena.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("contrasena"))-100);
                });
              return false;
            }else if(contrasena.value.length<6){
              swal("","La contraseña debe ser de por lo menos 6 caracteres.","error").then((value) => {
                contrasena.focus();
                contrasena.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("contrasena"))-100);
                });
              return false;
            }else if(!validacionContrasena.test(contrasena.value)){
              swal("","La contraseña debe incluir al menos 1 mayúscula, 1 minúscula y un número. No se permiten espacios en blanco.","error").then((value) => {
                contrasena.focus();
                contrasena.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("contrasena"))-100);
                });
              return false;
            }else{
              contrasena.style.backgroundColor = '#091E30';
            }

          //Validar Confirmacion Contrasena
            if( contrasenaConfirmacion.value == null || contrasenaConfirmacion.value.length == 0) {
              swal("","Debes confirmar tu contraseña.","error").then((value) => {
                contrasenaConfirmacion.focus();
                contrasenaConfirmacion.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("contrasenaConfirmacion"))-100);
                });
              return false;
            }else if( contrasena.value != contrasenaConfirmacion.value ) {
              swal("","Las contraseñas no coinciden.","error").then((value) => {
                contrasenaConfirmacion.focus();
                contrasenaConfirmacion.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("contrasenaConfirmacion"))-100);
                });
              return false;
            }else{
              contrasenaConfirmacion.style.backgroundColor = '#091E30';
            }

          //Validar Correo
            if( correo.value == null || correo.value.length == 0 || /^\s+$/.test(correo.value) ) {
              swal("","El campo correo no puede estar vacío.","error").then((value) => {
                correo.focus();
                correo.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("correo"))-100);
                });
              return false;
            }else if(!validacionCorreo.test(correo.value)){
              swal("","El campo correo no tiene el formato indicado.","error").then((value) => {
                correo.focus();
                correo.style.backgroundColor = '#FF0000';
                window.scroll(0,findPos(document.getElementById("correo"))-100);
                });
              return false;
            }else{
              correo.style.backgroundColor = '#091E30';
            }

            //Validar Confirmacion Correo
              if( correoConfirmacion.value == null || correoConfirmacion.value.length == 0 || /^\s+$/.test(correoConfirmacion.value) ) {
                swal("","Debes confirmar tu correo.","error").then((value) => {
                  correoConfirmacion.focus();
                  correoConfirmacion.style.backgroundColor = '#FF0000';
                  window.scroll(0,findPos(document.getElementById("correoConfirmacion"))-100);
                  });
                return false;
              }else if( correo.value != correoConfirmacion.value ) {
                swal("","Los correos no coinciden.","error").then((value) => {
                  correoConfirmacion.focus();
                  correoConfirmacion.style.backgroundColor = '#FF0000';
                  window.scroll(0,findPos(document.getElementById("correoConfirmacion"))-100);
                  });
                return false;
              }else{
                correoConfirmacion.style.backgroundColor = '#091E30';
              }

            //Validar Dirección
              if( direccion.value == null || direccion.value.length == 0 || /^\s+$/.test(direccion.value) ) {
                swal("","El campo dirección no puede estar vacío.","error").then((value) => {
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
                swal("","El campo del codigo postal no puede estar vacío.","error").then((value) => {
                  codigoPostal.focus();
                  codigoPostal.style.backgroundColor = '#FF0000';
                  window.scroll(0,findPos(document.getElementById("codigoPostal"))-100);
                  });
                return false;
              }else if(!validacionCodigoPostal.test(codigoPostal.value)){
                swal("","El código postal introducido es inválido.","error").then((value) => {
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
