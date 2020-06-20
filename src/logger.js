const {
  format,
  loggers,
  transports: { Console },
} = require('winston');
const WinstonDailyRotateFile = require('winston-daily-rotate-file');
const path = require('path');

const loggerFormat = format.combine(
  format.colorize(),
  format.timestamp(),
  format.align(),
  format.printf((info) => `${info.timestamp} ${info.level}:${info.message}`),
);

loggers.add('customLogger', {
  format: loggerFormat,
  transports: [
    new WinstonDailyRotateFile({
      filename: `${process.cwd()}/logs/%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      level: 'error',
    }),
    new Console({
      level: 'info',
    }),
  ],
});

module.exports = loggers.get('customLogger');
