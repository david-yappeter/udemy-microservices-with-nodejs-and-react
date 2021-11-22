export class DatabaseConnectionError extends Error {
    reason: string = 'error connecting to database'

    constructor() {
        super();

        // because we extends built-in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
}
