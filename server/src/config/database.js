module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite',
  },
  production: {
    dialect: 'mysql',
    host: process.env.DB_HOST || '127.0.0.1',
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};
