require('dotenv/config');
require('express-async-errors');

const express = require('express');
const router = require('./app/routes');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use(cors);
app.use(router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log('🚀 server started'));
