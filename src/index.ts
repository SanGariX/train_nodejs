import express, { Request, Response } from 'express';

const app = express();

app.use((req: Request, res: Response): void => {
    res.send('Hello world');
});

app.listen(3000, () => {
    console.log('server is runing!');
});
