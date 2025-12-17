const PORT = process.env.PORT;

const MONGODB_URI =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_MONGODB_URI
    : process.env.NODE_ENV === "development"
    ? process.env.DEV_MONGODB_URI
    : null;

module.exports = { MONGODB_URI, PORT };
