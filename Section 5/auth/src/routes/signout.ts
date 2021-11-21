import express from 'express';

const router = express.Router();

router.post('/api/users/signup', (req: express.Request, res: express.Response) => {
    const { email, password}: {email: string, password: string} = req.body;
    
    // if (!users[email]) {
    //     users[email] = new User(email, password);
    //     res.status(201).send(users[email]);
    // } else {
    //     res.status(400).send("User already exists");
    // }
}); 

export { router as signoutRouter };
