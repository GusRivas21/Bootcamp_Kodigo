<?php

function generarFibonacci($n) {
        if ($n <= 0) {
            echo "Por favor ingrese un numero mayor que o \n";
            return;
        }

        $fibonacci = [0, 1];

        if ($n ==1) {
            echo "Serie Fibonacci: 0\n";
            return;
        }

        for ($i = 2; $i < $n; $i++) {
            $fibonacci[$i] = $fibonacci[$i - 1] + $fibonacci[$i - 2];
        }

        echo "Serie Fibonacci de $n terminos: " . implode(",", $fibonacci) . "\n";
    }

    generarFibonacci(10);
?>