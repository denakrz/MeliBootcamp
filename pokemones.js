// Dado el siguiente array filtremos a los pokémons con poder menor a 10.

let pokemones = [
    { pokemon: 'pikachu', power: 12 },
    { pokemon: 'bulbasaur', power: 6 },
    { pokemon: 'charizard', power: 19 },
    { pokemon: 'squirtle', power: 3 },
    { pokemon: 'metwo', power: 6 },
]

let filteredPokemones = pokemones.filter(poke => poke.power < 10);
console.log('Los pokemones con poder menor a 10 son:')
console.log(filteredPokemones);