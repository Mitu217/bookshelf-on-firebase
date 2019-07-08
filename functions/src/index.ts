import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import apiRouter from './routes/api';

const REGION = "asia-northeast1"

admin.initializeApp(functions.config().firebase)

const main = express();

main.use(cors({ origin: true }));

main.use('/api', apiRouter);

export const app = functions.region(REGION).https.onRequest(main);
