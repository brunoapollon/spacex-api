require('dotenv/config');
const express = require('express');
const router = require('./app/routes');
const cors = require('./app/middlewares/cors');

const app = express();

app.use(express.json());
app.use(cors);
app.use(router);

app.listen(3001, () => console.log('🚀 server started at http://localhost:3001'));
