import bcrypt from "bcrypt";

export class User {
    constructor(public email: string, public password: string) {
        this.password = bcrypt.hashSync(password, 10);
    }

    checkPassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
    }
}

export default User;