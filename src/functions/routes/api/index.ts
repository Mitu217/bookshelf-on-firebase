import cors from 'cors';
import express from 'express';
import v1Router from './v1';

const apiHandler = express();

apiHandler.use(cors({ origin: true }));

apiHandler.use('/v1', v1Router);

export default apiHandler;
