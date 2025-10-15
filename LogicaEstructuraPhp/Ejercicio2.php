<?php

function sumaNumerosPares($numeros) {
    $suma = 0;
    foreach ($numeros as $num) {
        if ($num % 2 == 0) {
            $suma += $num;
        }
    }
    return $suma;
}

$lista = [2, 5, 8, 11, 14, 17, 20];
    echo "Array: " . implode(", ", $lista) . "\n";
    echo "Suma de números pares: " . sumaNumerosPares($lista) . "\n\n";

?>