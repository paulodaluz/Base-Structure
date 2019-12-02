var express = require('express');

module.exports = {
    exampleControllerGet(req, res){
        res.send('Resposta GET OK!')
    },

    exampleControllerPost(req, res){
        res.send('Resposta POST OK!')
    },

    exampleControllerComId(req, res){
        res.send(`Seu id é ${req.params.id}`)
    }
}