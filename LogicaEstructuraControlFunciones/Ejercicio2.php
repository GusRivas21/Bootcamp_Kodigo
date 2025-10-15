<?php

function esPrimo($numero) {
    // Los números menores o iguales a 1 no son primos
    if ($numero <= 1) {
        return false;
    }

    for ($i = 2; $i <= sqrt($numero); $i++) {
        if ($numero % $i == 0) {
            return false; // No es primo
        }
    }

    return true; // Es primo
}

    $numero = 17;

        if (esPrimo($numero)) {
            echo "$numero es un número primo.\n";
        } else {
            echo "$numero no es un número primo.\n";
        }
?>