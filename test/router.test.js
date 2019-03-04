process.env.NODE_ENV = 'test';

const express = require('express');
const router = express.Router();
const identifier = require('../Identifier');


let expect = require('chai').expect;

describe('/v1/next', () => {
    let previous_Counter = identifier.counter;
    let current_Counter = identifier.increment();
    it('should increment the number by 1', function() {
        expect(previous_Counter).not.to.be.equal(current_Counter);
        expect(previous_Counter + 1).to.be.equal(current_Counter);
    });
});


describe('/v1/current', () => {
    it('should not be NaN', function() {
        expect(identifier.counter).not.to.be.NaN;
    });
});

describe('/v1/reset', () => {
    let resetVal = 2;
    identifier.counter = resetVal;
    it('should not be NaN', function() {
        expect(identifier.counter).not.to.be.NaN;
    });
    it('should be equal to the reset Value', function() {
        expect(identifier.counter).to.be.equal(resetVal);
    });
    
});

