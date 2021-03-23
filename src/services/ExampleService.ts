import { Request, Response } from 'express';

module.exports = {
  exampleServiceGet(req: Request, res: Response): object {
    return res.json({ response: 'Resposta GET OK!' });
  },

  exampleServicePost(req: Request, res: Response): object {
    return res.send('Resposta POST OK!');
  },

  exampleServiceComId(req: Request, res: Response): object {
    return res.send(`Seu id é ${req.params.id}`);
  }
};
