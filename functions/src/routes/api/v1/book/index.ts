import * as express from 'express';
import {validation as listValidation, action as listAction} from './list';
import {validation as newValidation, action as newAction} from './new';

const router = express();

router.get('/list', listValidation, listAction);
router.post('/new', newValidation, newAction);

export default router
