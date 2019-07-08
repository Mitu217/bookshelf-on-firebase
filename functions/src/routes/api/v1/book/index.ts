import * as express from 'express';
import {validation as listValidation, action as listAction} from './list';

const router = express();

router.get('/list', listValidation, listAction);

export default router
