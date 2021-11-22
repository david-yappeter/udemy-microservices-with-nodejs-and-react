import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post('/api/users/signup'
,[
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .isLength({min: 4, max: 20})
        .withMessage('Password must be between 4 and 20 characters')
]
, (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new Error('invalid email or password');
    }   

    const { email, password}: {email: string, password: string} = req.body;
    
    console.log('creating users');

    return res.status(201).send('users created');
    // if (!users[email]) {
    //     users[email] = new User(email, password);
    //     return res.status(201).send(users[email]);
    // } else {
    //     return res.status(400).send("User already exists");
    // }
});

export { router as signupRouter };
