var express = require('express');
const { validationResult } = require('express-validator');

var service = require('../service/ExampleService')

module.exports = {
    exampleControllerGet(req, res){
        service.exampleServiceGet(req, res);
    },

    exampleControllerPost(req, res){
        service.exampleServicePost(req, res);
    },

    exampleControllerComId(req, res){
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        service.exampleServiceComId(req, res);
    }
}