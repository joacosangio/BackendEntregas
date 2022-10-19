const operacion = (a, b, callback) => {
    return callback (a, b);
};

const suma = (a, b) => a + b;

const resta = (a, b) => a - b;

const division = (a, b) => a / b;

const multiplicacion = (a, b) => a * b;

const modulo = (a, b) => a % b;


console.log(operacion(10, 10, modulo))
