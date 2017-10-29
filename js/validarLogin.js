
    window.onload = function() {
        document.getElementById('ingresar').onclick = function  () {

          var usuario = document.getElementById("usuario");
          var contrasena = document.getElementById("contrasena");

          //Validar Usuario
            if( usuario.value == null || usuario.value.length == 0 || /^\s+$/.test(usuario.value) ) {
              swal("","Ingresa tu nombre de usuario.","error").then(function () {
                usuario.focus();
                usuario.style.backgroundColor = '#FF0000';
                });
              return false;
            }else{
              usuario.style.backgroundColor = '#091E30';
            }


            if( contrasena.value == null || contrasena.value.length == 0 || /^\s+$/.test(contrasena.value) ) {
              swal("","Ingresa tu contraseña.","error").then(function () {
                contrasena.focus();
                contrasena.style.backgroundColor = '#FF0000';
              });
              return false;
            }else{
              contrasena.style.backgroundColor = '#091E30';
            }

        }
    }

    function cambioFondo(obj){
      var objeto = document.getElementById(obj);
      objeto.style.backgroundColor = '#091E30';
    }
