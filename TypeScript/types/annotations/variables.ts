const apples: number = 5;
const date: Date = new Date();

class Vehicle {

    constructor(public color: string) {}

    protected honk(): void {
        console.log('beep')
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color)
    }

    honking() {
        this.honk();
    }


}
let car: Car = new Car(4, 'Red');

let  point: {x: number, y:number} = {
    x: 10,
    y: 20,
};

const printVal: (val: number) => void = (val: number) => {
    console.log(val);
};

const arr: Array<string> = ['asd', 'asgewg', 'ehserwh'];
const doubleArr = [['asd', 'asgas'],['asgasgasg'], ['serhers', 'fsdhjfsh','fdshf', [1,2,3]]]

car.honking();
console.log(car.color);
console.log(car.wheels);