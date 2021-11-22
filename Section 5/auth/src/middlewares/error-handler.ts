import { Request, Response, NextFunction } from "express";

export const errorHandler = (
    err: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    console.log('internal system error', err);
    
    res.status(400).send({
        message: err,
    })
}

export default errorHandler;