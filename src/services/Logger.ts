const winston = require('winston');

// eslint-disable-next-line
module.exports = new winston.createLogger({
  transports: new winston.transports.Console()
});

/*  LEVELS
  0: error
  1: warn
  2: info
  3: verbose
  4: debug
  5: silly
*/
