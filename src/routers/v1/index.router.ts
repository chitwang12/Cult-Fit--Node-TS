import express from 'express';
import pingRouter from './ping.router';
// import userRouter from './user.router';

const v1Router = express.Router();

v1Router.use('/ping', pingRouter);

// v1Router.use('/users', userRouter);

export default v1Router;