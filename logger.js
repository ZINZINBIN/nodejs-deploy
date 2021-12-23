const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info', // error, warn, info, verbose, debug, silly 순으로 위험에 대한 상대적 척도
  format: format.json(),
  transports: [
    new transports.File({ filename: 'combined.log' }),
    new transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({ format: format.simple() }));
}

module.exports = logger;
