$(document).ready(function() {
    const ajaxUrl = 'json/numeros.json';

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: ajaxUrl,
        success: function(response) {
            const numeros = response.numeros;
            const numerosString = numeros.join(', ');
            const numerosInput = document.getElementById('numeroInput');
            numerosInput.value = numerosString;
            console.log(numeros);
        },
        error: function(error) {
            console.error('Error al obtener los datos:', error);
        }
    });

    $('#sum').on('click', function() {
        const numeros = obtenerNumeros();
        const resultado = sumarNumeros(numeros);
        mostrarResultado(resultado);
    });

    $('#multi').on('click', function() {
        const numeros = obtenerNumeros();
        const resultado = multiplicarNumeros(numeros);
        mostrarResultado(resultado);
    });

    function obtenerNumeros() {
        const numerosInput = document.getElementById('numeroInput').value;
        const numerosArray = numerosInput.split(',').map(Number);
        return numerosArray;
    }

    function sumarNumeros(numeros) {
        return numeros.reduce((a, b) => a + b, 0);
    }

    function multiplicarNumeros(numeros) {
        return numeros.reduce((a, b) => a * b, 1);
    }
    
    function mostrarResultado(resultado) {
        const resultadoInput = document.getElementById('result');
        resultadoInput.value = resultado;
    }
});

