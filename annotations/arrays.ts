const mlbTeams = ['Boston', 'San diego', 'Mets', 'Atlanta'];
const date = [new Date(), new Date()];

const playerMlbTeams = [
    ['Kike Hernandez'],
    ['Manny Machado'],
    ['Francisco Lindor'],
    ['Acuña JR']
]

// Help with inference when extracting values
const player = mlbTeams[0];
const myPlayer = mlbTeams.pop()

// Prevent incompatible values
mlbTeams.push(10);

// Help with 'map'
mlbTeams.map((player: string): string => {
    return player.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [];
importantDates.push('2030-5-11');
importantDates.push(new Date);







// Probando
// Solo se debe usar el type annotation si no se esta pasando propiedades concretas ya sea al array, objecto, function etc, de lo contrario TS las asume por default

// const mlbTeams = ['Boston', 'San diego', 'Mets', 'Atlanta'];

// const americanTeam: string[] = [];
// for (let i = 0; i < mlbTeams.length; i++){
//     if(mlbTeams[i] === 'Boston'){
//         americanTeam.push(mlbTeams[i])
//     }
// }