// types annotations

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Build in objects

    let now: Date = new Date();

    // Array
    let names: string[] = ['Samnuel', 'Kemuel', 'Keylin'];
    let myAges: number[] = [29, 26, 0];
    let thuths: boolean[] = [true, true, false];

    // Classes 
    class Car {

    }
    // car en minuscula hace refencia a la variable que almacena en instanciamiento de clase y su tipificacion
    let car: Car = new Car();

    // Object literal
    let point: { x: number; y: number} = {
        x: 3,
        y: 7
    }


    // Function
    const logNumber: (i: number) => void = (i) => {
        console.log(i);
    }

    // When to use annotations
    // Function that return the 'any' type
    const json = '{"x": 3; "y": 7}';
    const coordinates: {x: number; y: number} = JSON.parse(json);
    console.log(coordinates); // {x: 3; y: 7}

    // When we declare a variable in one line and initalizate it later
    let words = ['blue', 'red', 'white'];
    let foundWord: boolean;

    for (let i = 0; i < words.length; i++){
        if (words[i] === 'blue') {
            foundWord = true
        }
    }

    // Variable whose type cannot be inferred correctly
    let numbers = [-1, -100, 7];
    let numberAboveZero: boolean | number = false;

    for (let i =0; i < numbers.length; i++) {
        if (numbers[i] > 0){
            numberAboveZero = numbers[i];
        }
    }

    