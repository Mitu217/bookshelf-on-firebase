import express from 'express';
import bookRouter from './book';

const router = express();

router.use('/book', bookRouter);

export default router;
