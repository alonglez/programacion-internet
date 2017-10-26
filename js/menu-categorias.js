var menuActivado = true;

function main() {
    'use strict';
    $('.boton-categorias').click(function () {
        if (menuActivado) {
            $('.menu-lateral').animate({
                left: '0'
            });
            menuActivado = false;
        } else {
            $('.menu-lateral').animate({
                left: '-100%'
            });
            menuActivado = true;
        }
    });
}

$(document).ready(main);