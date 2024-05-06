require('dotenv').config();

const mogoURI=

module.exports = {
  mongoURI:
  process.env.NODE_ENV === 'development'
    ? MONGO_URI_DEV
    : process.env.NODE_ENV === 'production'
    ? MONGO_URI_PROD
    : MONGO_URI_DEV,
};