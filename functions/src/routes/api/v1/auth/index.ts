import * as express from 'express';

const router = express();

router.get('/',(req, res) => {
    return res.send('Auth!!');
});

export default router
