import * as admin from 'firebase-admin';
import * as express from 'express';

const BOOK_COLLECTION = 'books';
const DEFAULT_LIMIT = 20;
const DEFAULT_PAGE = 0;

const router = express();

router.get('/list', async (request, response) => {
    const page = request.query.page ? parseInt(request.query.page, 10) : DEFAULT_PAGE;
    const limit = request.query.limit ? parseInt(request.query.limit, 10) : DEFAULT_LIMIT;
    const offset = page * limit;

    const snapShot = await admin.firestore().collection(BOOK_COLLECTION).offset(offset).limit(limit).get()
    const data = snapShot.docs.map(doc => {
        return doc.data();
    });
    response.status(200).send({ data: data });
});

export default router
