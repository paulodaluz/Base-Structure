var express = require('express');

const router = express();

router.route('/exampleRoute')
    .get(function (req, res) { res.send('Get a random book') })
    .post(function (req, res) { res.send('Add a book') })

module.exports = router;