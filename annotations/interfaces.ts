// Interfaces + class: is a strong form how to make reusable code

// Con este interface evito usar una annotation muy larga en la funcion, y es un codigo mas facil de reutilizar
// Se pueden expresar funciones dentro de la interface
// Es importante que las interfaces tengan nombres globales que pueden ser reutilizadas en distintos casos 
interface Reportable {
    // name: string,
    // year: Date,
    // broken: boolean,
    summary(): string
}

const carSpecs= {
    name: 'maserati',
    year: new Date,
    broken: false,
    summary(): string {
        return `Name ${this.name}`
    }
};

const drink = {
    color: 'black',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}
                                // From this way i have a long time annotation
// const buyVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
//     console.log(`Name ${vehicle.name}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Broken: ${vehicle.broken}`);
// }

// buyVehicle(carBrand);

const showSummary = (item: Reportable): void => {
    console.log(item.summary());
    // console.log(`Name ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken: ${vehicle.broken}`);
};

showSummary(carSpecs);
showSummary(drink);