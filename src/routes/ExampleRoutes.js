var express = require('express');

const router = express();

router.route('/exampleRoute')
    .get(function (req, res) { res.send('Example Get') })
    .post(function (req, res) { res.send('Example Post') })

module.exports = router;