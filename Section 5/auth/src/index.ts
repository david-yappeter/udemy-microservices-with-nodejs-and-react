import express from 'express';
import { json } from 'body-parser';
import User from './User';
// import dotenv from 'dotenv';
// dotenv.config();

const users: {[name: string]: User} = {}
let currentUser: User | null | undefined = null;

const app = express();
app.use(express.json());
const port: string | number = process.env.PORT || 3000;

app.post('/api/users/signup', (req: express.Request, res: express.Response) => {
    const { email, password}: {email: string, password: string} = req.body;
    
    if (!users[email]) {
        users[email] = new User(email, password);
        res.status(201).send(users[email]);
    } else {
        res.status(400).send("User already exists");
    }
});

app.post('/api/users/signin', (req: express.Request, res: express.Response) => {
    const {email, password}: {email: string, password: string} = req.body;

    if(users[email] && users[email]?.checkPassword(password)) {
        currentUser = users[email];
        res.status(200);
    } else {
        res.status(400).send("Invalid email or password");
    }
})  

app.post('/api/users/signout', (_, res: express.Response) => {
    currentUser = null;
    res.status(200);
})

app.get('/api/users/currentuser', (_, res: express.Response) => {
    res.send(currentUser);   
})

app.listen(port, () => {console.log(`Listening on http://localhost:${port}`)});