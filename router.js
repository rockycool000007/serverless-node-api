const express = require('express');
const router = express.Router();
const identifier = require('./Identifier');


router.get('/v1/next', (req, res) => {
    let counter = identifier.increment();
    res.send(`Next integer value is : ${counter}`);
});


router.get('/v1/current', (req, res) => {
    let counter = identifier.counter;
    res.send(`Current integer value is : ${counter.toString()}`);
});


router.put('/v1/reset', (req, res) => {
    let resetVal = parseInt(req.current);
    identifier.counter = resetVal;
    res.send(`Integer value reset completed successfully. Current value is : ${counter.toString()}`);
});

module.exports = router;

