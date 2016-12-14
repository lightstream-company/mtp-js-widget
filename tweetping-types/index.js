const t = require('tcomb');
const ft = require('tcomb-form-types');

const TwitterUser = t.struct({
  id: ft.alphanumeric,
  screenName: t.String
});

const Tweet = t.struct({
  text: t.String,
  time: ft.integer,
  user: TwitterUser
});

const OAuthToken = t.struct({
  accessToken: ft.alphanumeric,
  secretAccessToken: t.alphanumeric
});

const Stream = t.struct({
  _id: t.alphanumeric,
  user: TwitterUser,
  token: OAuthToken,
  keyword: t.list(t.String)
});

const EVENTS = {
  STREAM_CREATED: 'STREAM_CREATED',
  KEYWORD_ADDED: 'ADD_KEYWORD',
  KEYWORD_REMOVED: 'REMOVE_REMOVED',
  SINGUP_EVENT: 'SINGUP_EVENT',
  TOKEN_UPDATED: 'TOKEN_UPDATED'
};

const Event = t.struct({
  type: t.enum(Object.keys(EVENTS)),
  userId: t.alphanumeric,
  payload: t.maybe(t.Any),
  timestamp: t.Number
});

module.exports = {
  EVENTS,
  Event,
  TwitterUser,
  Tweet,
  Stream
};
