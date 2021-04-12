// We never use the type annotation for output -->
const add = (a: number, b: number): number => {
    return a + b;
}; 

// Example -->
const adder = (a: number, b: number) => {
    return a + b;
};


const subtract = (a: number, b: number) => {
     a - b
};

function divide (a: number, b: number): number{
    return a / b

};

const multiply = function(a: number, b: number): number{
    return a * b
};

const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): void => {
    if(!message) {
        throw new Error (message);
    } 
};


// De esta manera podemos destructurar y manipular las propiedades sin necesidad de variables intermediarias
const todayWeather = {
    date: new Date(),
    weather: 'sunny'
}
                // Destructuring    and    annotations
const logWeather = ({ date, weather} : {date: Date, weather: string}) => {
    console.log(date);
    console.log(weather);
}

logWeather(todayWeather);


