$(document).ready(function () {

	$.validator.addMethod('usuarioValido',function(value,element){
		return this.optional(element) || /[a-zA-Z]((\.|_|-)?[a-zA-Z0-9]+)/.test(value);
	});

	$(".contenedor-inputs input[name=registrar]").click(function (){
        $("#form-registro").validate({
        	rules:{
        		nombre:{required:true},
        		apellidos:{required:true},
        		usuario:{required:true,minlength: 4,maxlength: 10,usuarioValido:true},
        		contraseña:{required:true},
        		confirmarContraseña:{required:true,equalTo:".contenedor-inputs input[name=contraseña]"},
        		email:{required:true, email:true},
        		confirmarEmail:{required:true,equalTo:".contenedor-inputs input[name=email]"},
        		direccion:{required:true},
        		cp:{required:true,minlength: 5,maxlength: 5}

        	},
        	messages:{
        		nombre: {required:'Nombre es requerido'},
        		apellidos: {required:'Apellidos requeridos'},
        		usuario: {required:'Usuario es requerido',maxlength: 'Máx 10 caracteres.',minlength: 'Min 4 caracteres',usuarioValido:'(Letra) ó (_Letra) al inicio del usuario'},
        		contraseña: {required:'Contraseña es requerida'},
        		confirmarContraseña: {required:'Contraseña es requerida',equalTo:'Las contraseñas no coinciden'},
        		email: {required:'Email es requerido',email:'El formato de email es incorrecto'},
        		confirmarEmail: {required:'Email es requerido',equalTo:'El email no coincide'},
        		direccion: {required:'Dirección es requerida'},
        		cp: {required:'Cp es requerido',number:'Introduce un código postal válido.',maxlength: 'Debe contener 5 dígitos.',minlength: 'Debe contener 5 dígitos'}
        	}

        });
        
    });


    /*var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var $nombre = $(".contenedor-inputs input[name=nombre]");
    var $apellidos = $(".contenedor-inputs input[name=apellidos]");
    var $usuario = $(".contenedor-inputs input[name=usuario]");
    var $contraseña = $(".contenedor-inputs input[name=contraseña]");
    var $confirmaContaseña = $(".contenedor-inputs input[name=confirmar-contraseña]");
    var $email = $(".contenedor-inputs input[name=email]");
    var $confirmaEmail = $(".contenedor-inputs input[name=confirmar-email]");
    var $direccion = $(".contenedor-inputs input[name=direccion]");
    var $cp = $(".contenedor-inputs input[name=cp]");

    $(".contenedor-inputs input[name=registrar]").click(function (){
        $(".error").remove();
        if( $nombre.val() == "" ){
            $nombre.focus().after("<span class='error'>Ingrese su nombre</span>");
            return false;
        }else if($apellidos.val() == ""){
        	$apellidos.focus().after("<span class='error'>Ingrese sus apellidos</span>");
            return false;
        }else if($usuario.val() == ""){
        	$usuario.focus().after("<span class='error'>Ingrese sus usuario</span>");
            return false;
        }
    });*/
});