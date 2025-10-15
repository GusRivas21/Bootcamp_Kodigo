<?php

function imprimirPiramide($filas) {
    for ($i = 1; $i <= $filas; $i++) {
        // Imprimir espacios a la izquierda
        for ($j = $i; $j < $filas; $j++) {
            echo " ";
        }
        // Imprimir asteriscos
        for ($k = 1; $k <= (2 * $i - 1); $k++) {
            echo "*";
        }
        echo "\n"; // Nueva línea por cada fila
    }
}
    echo "Pirámide de asteriscos:\n";
    echo "\n";

imprimirPiramide(5);
    echo "\n";
?>