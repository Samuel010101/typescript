const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

const cocacola: [string, boolean, number] = ['brown', true, 40];
cocacola[0] = 'brown'

// Types alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 25];
pepsi[0] = 'brown'

// Why tuples
// De esta forma no podemos interpretar y manipular con facilidad los datos
const carSpecs: [number, number] = [350, 3];

// Pero con objetos si tenemos datos en concreto y con mayor facilidad de manipular
const carVersion = {
    model: 350,
    serie: 3
}