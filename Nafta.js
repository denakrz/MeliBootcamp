// Crear una función que calcule cuántos litros de nafta gasta un auto que consume 2 litros cada 100km, 
// ingresando por parámetro la cantidad de kilómetros del recorrido a realizar. 

function naftaCalc (km) {
    return (km * 2 / 100)
}

// Luego crear una función que, a partir de ese dato,
// devuelva cuánto significa eso en pesos ingresando por parámetro el precio del litro de nafta.

function totalCalc (price, km) {
    return naftaCalc(km) * price
}

totalCalc(5, 150)
