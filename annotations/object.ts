const profile = {
    name: 'Sam',
    age: 29,
    coords: {
        lat: 0,
        lng: 24
    },
    setAge(age: number): void {
        this.age = age; 
    }
};

const { age } : {age: number} = profile;
const { 
    // Destructuring    and    annotations
    coords: { lat, lng }
}: {coords: {lat: number; lng: number}} = profile
