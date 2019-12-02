var express = require('express');

var service = require('../service/ExampleService')

module.exports = {
    exampleControllerGet(req, res){
        service.exampleServiceGet(req, res);
    },

    exampleControllerPost(req, res){
        service.exampleServicePost(req, res);
    },

    exampleControllerComId(req, res){
        service.exampleServiceComId(req, res);
    }
}