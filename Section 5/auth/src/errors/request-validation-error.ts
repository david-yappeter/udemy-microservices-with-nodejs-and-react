import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
    constructor(public errors: ValidationError[]) {
        super();

        // because we extends built-in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
}