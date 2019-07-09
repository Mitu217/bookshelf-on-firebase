import * as admin from 'firebase-admin';
import * as express from 'express';
import { check, validationResult } from 'express-validator';

const BOOK_COLLECTION = 'books';

export const validation = [
    check('title').isString().isLength({min: 1, max: 128}),
    check('authors').isArray().isLength({min: 1}),
    check('thumbnail').isURL(),
];

export const action = async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).send({ errors: errors.array() });
        throw errors;
    }
    const title = req.body.title
    const authors = req.body.authors
    const thumbnail = req.body.thumbnail

    const docRef = await admin.firestore().collection(BOOK_COLLECTION).add({
        "title": title,
        "authors": authors,
        "thumbnail": thumbnail,
        "created": Date.now(),
        "updated": Date.now(),
    }).catch(error => {
        res.status(500).send({ error: error });
        throw error;
    });
    res.status(200).send({ id: docRef.id });
};
