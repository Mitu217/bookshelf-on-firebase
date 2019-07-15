import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: 'next' } });
const handler = app.getRequestHandler();

export default async function appHandler(req: any, res: any): Promise<void> {
    await app.prepare();
    return handler(req, res);
}
