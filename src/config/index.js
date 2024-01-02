const dotenv = require("dotenv");
dotenv.config();
const config = {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || "mongodb://localhost:27017/portfolio",

  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
  JWT_EXPIRE: process.env.JWT_EXPIRE || "7m",

  MAIL_HOST: process.env.MAIL_HOS || "smtp.gmail.com",
  MAIL_USER: process.env.MAIL_USER || "example@example.com",
  MAIL_PASS: process.env.MAIL_PASS || "password",
  BLOGS_API_DOMAIN: process.env.BLOGS_API_DOMAIN || "http://localhost:3001",
};

module.exports = config;
