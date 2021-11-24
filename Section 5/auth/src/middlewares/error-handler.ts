import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
    err: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    if (!err) {
        return next();
    }

    if(err instanceof CustomError) {
        return res.status(err.statusCode).send({errors: err.serializeErrors()});
    }

    console.log('internal system error', err.message);
    
    return res.status(500).send({
        message: 'internal system error',
    })
}

export default errorHandler;