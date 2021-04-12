// Type of classes
// public --> this method can be called any where any time
// private --> this method can only be called by other method in this class
// protected --> this method can be called by other methods in this class, or by other methods in child classes

class Vehicle {
    // drive(): void {
    //     console.log('brun brun');
    // }

    // color: string = 'blue';

    // constructor(color: string){
    //     this.color = color;
    // }
    // OTRA FORMA DE CREAR EL CONSTRUCTOR
    constructor(public color: string){}

    protected honk(): void {
        console.log('piiii piii!');
    }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color)

class Car extends Vehicle {
    constructor(public wheels: number, color: string){
        // Las clases extendidas en su propio constructor deben tener la llamada (super());
        super(color);
    }

    private drive(): void {
        console.log('vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk()
    }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();
const car = new Car(20, 'blue');
console.log(car.color)
car.startDrivingProcess();
// car.honk();