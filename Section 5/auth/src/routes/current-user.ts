import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (_, res: express.Response) => {
    // res.send(currentUser);   
})

export { router as currentUserRouter };
