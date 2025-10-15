<?php

function esPalindromo($cadena) {
    // Eliminamos espacios y convertimos todo a minúsculas
    $cadenaLimpia = strtolower(str_replace(' ', '', $cadena));

    // Comparamos la cadena con su versión invertida
    if ($cadenaLimpia == strrev($cadenaLimpia)) {
        return true;
    } else {
        return false;
    }
}

    $texto = "Seres";
        if (esPalindromo($texto)) {
            echo "\"$texto\" es un palíndromo.\n";
        } else {
            echo "\"$texto\" no es un palíndromo.\n";
        }

?>