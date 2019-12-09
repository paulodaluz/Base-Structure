const { validationResult } = require('express-validator');

const service = require('../service/ExampleService');

module.exports = {
  exampleControllerGet(req, res) {
    return service.exampleServiceGet(req, res);
  },

  exampleControllerPost(req, res) {
    return service.exampleServicePost(req, res);
  },

  exampleControllerComId(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    return service.exampleServiceComId(req, res);
  }
};
