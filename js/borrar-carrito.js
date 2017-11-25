function quitarProducto() {
	'use strict';
	$('.producto-agregado').remove();
}

function main() {
	'use strict';
	$('.btn-remover').click(function () {
		$('.producto-agregado').fadeOut('slow', quitarProducto);		
	});
}

$(document).ready(main());