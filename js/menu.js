var menuActivado = true;

function main() {
    'use strict';
    $('.boton-menu').click(function () {
        if (menuActivado) {
            $('header nav').animate({
                left: '0'
            });
            menuActivado = false;
        } else {
            $('header nav').animate({
                left: '-100%'
            });
            menuActivado = true;
        }
    });
}

$(document).ready(main);