import { validationResult } from 'express-validator';

import { Request, Response } from 'express';

const service = require('../services/ExampleService');

module.exports = {
  exampleControllerGet(req: Request, res: Response): Object {
    return service.exampleServiceGet(req, res);
  },

  exampleControllerPost(req: Request, res: Response): Object {
    return service.exampleServicePost(req, res);
  },

  exampleControllerComId(req: Request, res: Response): Object {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    return service.exampleServiceComId(req, res);
  }
};
