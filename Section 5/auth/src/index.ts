import express from 'express';
require('express-async-errors');
import { json } from 'body-parser';
import User from './User';
import mongoose from 'mongoose';
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found';
import dotenv from 'dotenv';
dotenv.config();

const users: {[name: string]: User} = {}
let currentUser: User | null | undefined = null;

const app = express();
const port: string | number = process.env.PORT || 3000;
app.use(json());
// app.use(currentUserRouter);
// app.use(signinRouter);
// app.use(signoutRouter);
app.use(signupRouter);

app.all('*', (req, res) => {
    throw new NotFoundError()
})
app.use(errorHandler);

(() => {
    try {
        mongoose.connect(process.env.MONGO_URL || "");
    } catch (err) {
        console.log('error connecting to mongo', err);
    }

    console.log("Connected to mongo")
})();

app.listen(port, () => {console.log(`Listening on http://localhost:${port}`)});
