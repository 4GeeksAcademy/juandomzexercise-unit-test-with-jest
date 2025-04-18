console.log("Hello World")

// Función que suma dos números
const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));

// Tasa de cambio
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87   // libra esterlina
};

// Función: euro -> dólar
function fromEuroToDollar (num) {
    return num * oneEuroIs["USD"];
}

// Función: dólar -> yen
function fromDollarToYen(num) {
    return num * (1 / oneEuroIs["USD"]) * oneEuroIs["JPY"];
}

// Función: yen -> libra
function fromYenToPound(num) {
    return (num / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
