
const express = require('express');
const os = require('os');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const notesRouter = require('./routes/notes');
const authRouter = require('./routes/auth');

mongoose.set('sanitizeFilter', true);

const app = express();

app.set('trust proxy', 1);
app.use(helmet());
app.use(express.json({ limit: '100kb' }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use('/auth', rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 20
}), authRouter);

app.get('/', (req, res) => {
    res.json({
        message: 'Xin chào từ đám mây!',
        host: os.hostname(),
        platform: `${os.type()} ${os.release()}`,
        cpus: os.cpus().length,
        memoryGB: Number((os.totalmem() / 1024 ** 3).toFixed(1)),
        uptimeSec: Math.round(os.uptime()),
        time: new Date().toISOString()
    });
});

app.use('/notes', notesRouter);

app.use((err, req, res, next) => {
    console.error(err);

    const clientError = ['ValidationError', 'CastError'].includes(err.name)
        || err.code === 'LIMIT_FILE_SIZE';

    res.status(clientError ? 400 : 500).json({ error: err.message });
});

module.exports = app;
