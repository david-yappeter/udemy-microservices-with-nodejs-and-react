import { CustomError } from "./custom-error";

class DatabaseConnectionError extends CustomError {
    reason: string = 'error connecting to database'
    statusCode = 500;

    constructor() {
        super('Database Connection Error');

        // because we extends built-in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [
            { message: this.reason }
        ]
    }
}

export { DatabaseConnectionError };