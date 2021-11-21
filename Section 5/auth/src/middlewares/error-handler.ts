import { Request, Response, NextFunction } from "express";

export const errorHandler = (
    err: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    console.log('internal system error', err);
    
    res.status(500).send({
        message: 'internal system error'
    })
}

export default errorHandler;