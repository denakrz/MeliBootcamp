// Crear un array que contenga números del 1 al 10.
// Retornar un nuevo array que contenga todos los números multiplicados por dos.

let numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(i+1)
}

console.log(`${'Los números son'} ${numbers}`);

let mutipliedNumbers = numbers.map(numbers => {
    return numbers * 2
})

console.log(`${'Si los multiplicamos quedarían en:'} ${mutipliedNumbers}`);

// Del array que devuelve el ejercicio anterior, filtrar los que sean mayores a 5

let filteredNumbers = mutipliedNumbers.filter(num => num>=5)
console.log(`${'Si filtramos por los números mayores a CINCO nos quedan:'} ${filteredNumbers} ${':)'}`);

// Del array que devuelve el ejercicio anterior, buscar el primero que sea mayor a 10

let greaterThanTenNumber = filteredNumbers.find(num => num > 10);
console.log(`${'Y el primer número MAYOR a 10 es:'} ${greaterThanTenNumber}`);