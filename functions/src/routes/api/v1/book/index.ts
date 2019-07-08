import * as admin from 'firebase-admin';
import * as express from 'express';
import { check, validationResult } from 'express-validator/check';

const BOOK_COLLECTION = 'books';
const DEFAULT_LIST_LIMIT = 20;
const DEFAULT_LIST_PAGE = 0;

const router = express();

const listValidation = [
    check('page').optional().isInt({min: 0}),
    check('limit').optional().isInt({min: 1, max: 120})
];

router.get('/list', listValidation, async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).send({ errors: errors.array() });
    }
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : DEFAULT_LIST_LIMIT;
    const page = req.query.page ? parseInt(req.query.page, 10) : DEFAULT_LIST_PAGE;
    const offset = limit * page;

    const snapShot = await admin.firestore().collection(BOOK_COLLECTION).offset(offset).limit(limit).get()
    const data = snapShot.docs.map(doc => {
        return doc.data();
    });
    res.status(200).send({ data: data });
});

export default router
