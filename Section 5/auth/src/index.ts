import express from 'express';
import { json } from 'body-parser';
import User from './User';
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
// import dotenv from 'dotenv';
// dotenv.config();

const users: {[name: string]: User} = {}
let currentUser: User | null | undefined = null;

const app = express();
app.use(json());
// app.use(currentUserRouter);
// app.use(signinRouter);
// app.use(signoutRouter);
app.use(signupRouter);
app.use(errorHandler);
const port: string | number = process.env.PORT || 3000;

app.listen(port, () => {console.log(`Listening on http://localhost:${port}`)});