require('dotenv/config');
const express = require('express');
const cors = require('./app/middlewares/cors');

const app = express();

app.use(express.json());
app.use(cors);

app.listen(3001, () => console.log('🚀 server started at http://localhost:3000'));
