const { check } = require('express-validator');

exports.validaExampleRouterId = [
    check('id')
    .not()
    .isEmpty()
    .isNumeric()
]