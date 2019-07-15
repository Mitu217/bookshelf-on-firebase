import express from 'express';
import { action as listAction, validation as listValidation } from './list';
import { action as newAction, validation as newValidation } from './new';

const router = express();

router.get('/list', listValidation, listAction);
router.post('/new', newValidation, newAction);

export default router;
