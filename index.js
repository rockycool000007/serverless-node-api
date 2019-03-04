const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const router = require('./router');


app.use('/', router);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

