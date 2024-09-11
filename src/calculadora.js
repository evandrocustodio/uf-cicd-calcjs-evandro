 // Função de adição
    function add(a, b) {
        return a + b;
    }   

// Função de subtração
    function subtract(a, b) {
        return a - b;
    }
// Função de potenciação
    function power(base, exponent) {
        return Math.pow(base, exponent);
    }

    function divide(a, b) {
        if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
        }
        return a / b;
    }

    // Função de multiplicação
    function multiply(a, b) {
        return a * b;
    }

    // Exportar as funções
    module.exports = {
        add,
        subtract,
      multiply,
      divide,
      power
    };