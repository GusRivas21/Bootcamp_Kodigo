<?php

function listaInvertida($numeros) {
    // Usamos array_reverse() para invertir el orden del array
    $invertida = array_reverse($numeros);
    return $invertida;
}

$listaOriginal = [1, 2, 3, 4, 5];
    echo "Lista original: " . implode(", ", $listaOriginal) . "\n";
    echo "Lista invertida: " . implode(", ", listaInvertida($listaOriginal)) . "\n\n";

?>