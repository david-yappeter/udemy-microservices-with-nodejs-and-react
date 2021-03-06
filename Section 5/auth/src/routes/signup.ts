import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { User } from '../models/user';
import { RequestValidationError } from '../errors/request-validation';
import { BadRequestError } from '../errors/bad-request';

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
, async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
    }   

    const { email, password }: {email: string, password: string} = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        console.log("Email in use");
        throw new BadRequestError('Email in use');
    }

    const user = User.build({ email, password });
    await user.save();

    console.log('creating users');

    return res.status(201).send(user);
    // if (!users[email]) {
    //     users[email] = new User(email, password);
    //     return res.status(201).send(users[email]);
    // } else {
    //     return res.status(400).send("User already exists");
    // }
});

export { router as signupRouter };
