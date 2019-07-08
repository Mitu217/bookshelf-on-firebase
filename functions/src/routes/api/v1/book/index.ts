import * as admin from 'firebase-admin';
import * as express from 'express';

const BOOK_COLLECTION = 'books';

const router = express();

router.get('/list', async (request, response) => {
    const snapShot = await admin.firestore().collection(BOOK_COLLECTION).offset(0).limit(20).get()
    const data = snapShot.docs.map(doc => {
        return doc.data();
    });
    response.status(200).send({ data: data });
});

export default router
