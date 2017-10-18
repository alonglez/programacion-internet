
    window.onload = function() {
        document.getElementById('recuperar').onclick = function  () {

          var validacionCorreo=  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          var correo = document.getElementById("correo");

          //Validar Correo
            if( correo.value == null || correo.value.length == 0 || /^\s+$/.test(correo.value) ) {
              swal("","El campo correo no puede estar vacío.","error").then((value) => {
                correo.focus();
                correo.style.backgroundColor = '#FF0000';
                });
              return false;
            }else if(!validacionCorreo.test(correo.value)){
              swal("","El campo correo no tiene el formato indicado.","error").then((value) => {
                correo.focus();
                correo.style.backgroundColor = '#FF0000';
                });
              return false;
            }else{
              correo.style.backgroundColor = '#091E30';
            }

        }
    }
