import * as admin from 'firebase-admin';
import * as express from 'express';
import { check, validationResult } from 'express-validator/check';

const BOOK_COLLECTION = 'books';

const LIMIT_DEFAULT = 20;
const LIMIT_MIN = 1;
const LIMIT_MAX = 120;
const PAGE_DEFAULT = 0;
const PAGE_MIN = 0;

export const validation = [
    check('page').optional().isInt({min: PAGE_MIN}),
    check('limit').optional().isInt({min: LIMIT_MIN, max: LIMIT_MAX})
];

export const action = async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).send({ errors: errors.array() });
    }
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : LIMIT_DEFAULT;
    const page = req.query.page ? parseInt(req.query.page, 10) : PAGE_DEFAULT;
    const offset = limit * page;

    const snapShot = await admin.firestore().collection(BOOK_COLLECTION).offset(offset).limit(limit).get()
    const data = snapShot.docs.map(doc => {
        return doc.data();
    });
    res.status(200).send({ data: data });
};
