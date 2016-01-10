import _ from 'lodash';

export default (req, res, next) => {
  sails.log.verbose("checking for session flash messages");

  res.locals.messages = {success: [], error: [], warning: []};

  if (!__hasMessage(req.session.messages)) {
    req.session.messages = {success: [], error: [], warning: []};
    sails.log.verbose("no session flash messages found.");
    return next();
  }

  sails.log.verbose("found session flash messages", req.session.messages);

  res.locals.messages = _.clone(req.session.messages);

  // Clear flash
  req.session.messages = {success: [], error: [], warning: []};
  return next();
};

function __hasMessage(messages) {
  return messages && (messages.success.length || messages.warning.length || messages.error.length);
}
