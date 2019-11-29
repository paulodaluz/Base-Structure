const express = require("express");

const { version } = require('../../package.json');

const router = express.Router();

router.get('/version', (req, res) => {
  res.status(200).json({ version });
});

router.get('/healthcheck', (req, res) => {
  return res.status(200).json({ status: 'UP' });
});

module.exports = router;
