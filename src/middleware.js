const logger = require('./logger');
const morgan = require('morgan');

const stream = {
  write(message) {
    const status = parseInt(message.split(' ')[2], 10);

    if (status >= 400) {
      logger.error(message);
    } else {
      logger.info(message);
    }
  },
};

/**
 *
 * @param {('tiny'|'combined'|'common'|'dev'|'short')} [format='tiny']
 */
const middleware = (format = 'tiny') => morgan(format, { stream });

module.exports = middleware;
