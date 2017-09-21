const Logger = require('logplease');
const logger = Logger.create('utils');
logger.debug('Hola Mundo de Node');
//var dos= logger.log(`This is a log message`); // alias for debug()
logger.info('nformación de último momento, Node.js es lo más!!');
logger.warn('Tirando warnings como campeones');
logger.error('Algo no está bien!!! ');

