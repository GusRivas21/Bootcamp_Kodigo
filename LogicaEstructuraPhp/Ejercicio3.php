<?php

function frecuenciaCaracteres($texto) {
    $frecuencia = [];

    // Recorremos cada carácter del texto
    for ($i = 0; $i < strlen($texto); $i++) {
        $caracter = $texto[$i];

        // Si el carácter ya existe en el array, aumentamos el contador
        if (isset($frecuencia[$caracter])) {
            $frecuencia[$caracter]++;
        } else {
            $frecuencia[$caracter] = 1;
        }
    }

    return $frecuencia;
}

$cadena = "programacion";
    echo "Cadena: $cadena\n";
    echo "Frecuencia de caracteres:\n";
    print_r(frecuenciaCaracteres($cadena));
    echo "\n";

?>