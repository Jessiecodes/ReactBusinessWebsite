import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import data from './data.js';


const app = express();
mongoose.connect('mongodb://localhost/security', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.get('/', (req, res) => {
    res.send('Server is ready ')
});

app.use('/api/users', userRouter);
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.messsage });
});

const port = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Serve at http://localhost:${port}`);
});