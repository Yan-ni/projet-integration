const config = {
  development: {
    API_URL: 'http://localhost:3000',
  },
  production: {
    API_URL: 'https://pi.aniskh.com',
  },
};

const env = process.env.NODE_ENV || 'development';

export default config[env].API_URL;
