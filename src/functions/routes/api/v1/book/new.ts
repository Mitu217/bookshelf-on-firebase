import express from 'express';
import { check, validationResult } from 'express-validator';
import * as admin from 'firebase-admin';

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
    const title = req.body.title;
    const authors = req.body.authors;
    const thumbnail = req.body.thumbnail;

    const docRef = await admin.firestore().collection(BOOK_COLLECTION).add({
        authors,
        thumbnail,
        title,
        // tslint:disable-next-line:object-literal-sort-keys
        created: Date.now(),
        updated: Date.now(),
    }).catch((error) => {
        res.status(500).send({ error });
        throw error;
    });
    res.status(200).send({ id: docRef.id });
};
