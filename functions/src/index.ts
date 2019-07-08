import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const REGION = 'asia-northeast1';
const BOOK_COLLECTION = 'books';

admin.initializeApp(functions.config().firebase)

export const getBooks = functions
    .region(REGION)
    .https.onRequest((request, response) => {
        admin.firestore().collection(BOOK_COLLECTION).offset(0).limit(20).get().then(snapshot => {
            const res: {[field: string]: any} = []
            snapshot.forEach((doc) => {
                res.push(doc.data())
            });
            response.status(200).send(res)
        })
        .catch(err => {
            throw new functions.https.HttpsError('internal', err.message, err);
        });
    });

