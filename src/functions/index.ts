import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import apiRouter from './routes/api';
import appHandler from './routes/app';

const REGION = 'asia-northeast1';

// setup firestore
admin.initializeApp(functions.config().firebase);

export const api = functions.region(REGION).https.onRequest(apiRouter);

// region must be us-central1 for rewrites hosting.
// https://firebase.google.com/docs/functions/locations#http_and_client_callable_functions
export const app = functions.region('us-central1').https.onRequest(appHandler);
