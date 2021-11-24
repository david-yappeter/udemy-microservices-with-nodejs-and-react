abstract class CustomError extends Error {
    abstract statusCode: number;
    
    constructor(public message: string) {
        super(message);

        // because we extends built-in class
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeErrors(): { 
        message: string; 
        field?: string 
    }[];
}

export { CustomError };