console.log("Hello World")


// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Exporta la función para usarla en otros archivos
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

// Función para convertir de dólares a yen
function fromDollarToYen(num) {
    let dolarToYen = num * (1/ 1.07) * 156.5; // Conversión correcta

    return dolarToYen;
}

// Función para convertir de yen a libra
function fromYenToPound(num) {
    let yenToEuro = num / 156.5;
    let euroToPound = yenToEuro * 0.87;
    return euroToPound;
}