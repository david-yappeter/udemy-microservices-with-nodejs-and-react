import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req: express.Request, res: express.Response) => {
    const {email, password}: {email: string, password: string} = req.body;

    // if(users[email] && users[email]?.checkPassword(password)) {
    //     currentUser = users[email];
    //     res.status(200);
    // } else {
    //     res.status(400).send("Invalid email or password");
    // }
})  

export { router as signinRouter };
