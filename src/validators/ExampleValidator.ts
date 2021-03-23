import { check } from 'express-validator';

exports.validaExampleRouterId = [
  check('id')
    .not()
    .isEmpty()
    .isNumeric()
];
