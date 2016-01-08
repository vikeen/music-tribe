import mailer from 'sails-service-mailer';
import config from '../../config/services/mailer';

export default mailer('sendmail', config.services.mailer);
