const express = require('express');

const app = express();

app.use(express.json());

app.listen(3001, () => console.log('🚀 server started at http://localhost:3000'));
