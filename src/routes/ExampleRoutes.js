var express = require('express');

var exampleController = require('../controllers/ExampleController')

const router = express();

router.route('/exampleRoute')
    .get(exampleController.exampleControllerGet)
    .post(exampleController.exampleControllerPost)

router.get('/exampleRouterId/:id', exampleController.exampleControllerComId)

module.exports = router;