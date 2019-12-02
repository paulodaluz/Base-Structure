var express = require('express');
const { check, validationResult } = require('express-validator');

var exampleController = require('../controllers/ExampleController');

var validacaoBody = require('../validators/ExampleValidator');

const router = express();

router.route('/exampleRoute')
    .get(exampleController.exampleControllerGet)
    .post(exampleController.exampleControllerPost);

router.get('/exampleRouterId/:id', validacaoBody.validaExampleRouterId, exampleController.exampleControllerComId);

module.exports = router;