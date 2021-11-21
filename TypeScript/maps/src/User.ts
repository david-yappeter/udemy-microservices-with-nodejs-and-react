import faker from 'faker';
import { Mappable } from './Map';

export class User implements Mappable {
    public name: string;
    public location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }

    markerContent(): string {
        return `User Name: ${this.name}`
    }
}

export default User;